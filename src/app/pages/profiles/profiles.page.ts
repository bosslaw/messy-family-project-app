import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';
import { environment } from 'src/environments/environment';
import { FamilyMemberFormPage } from '../family-member-form/family-member-form.page';
const { Camera } = Plugins;

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  imageUrl = environment.imageUrl;
  profileImage = '';
  user: any;
  userDetails: any;
  familyMembers: any;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  relationships = [
    {id: 1, name: 'Mother'},
    {id: 2, name: 'Father'},
    {id: 3, name: 'Son'},
    {id: 4, name: 'Daughter'}
  ];

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private familyService: FamilyService,
    public actionsheetCtrl: ActionSheetController,
    public uploadImage: UploadImageService,
    private plt: Platform,
    public router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
      this.profileImage = this.imageUrl +this.user.Id + '/' + (new Date()).getTime();

      if(this.user) {
        this.loadFamilyMembers();
        this.getUserDetails();
      }
    })
  }

  formatDate(date) {
    return moment(date).format('LL');
  }

  uploadFile(event: EventTarget) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];

    this.uploadImage.uploadImageFile(file, this.user.Id).then(data => {
      console.log('upload complete')
      this.profileImage = this.imageUrl + this.user.Id + '/' + (new Date()).getTime();
    });
  }

  updateProfile() {
    this.router.navigate(['home/account-edit']);
  }

  async showProfileOptions() {
    const actionSheet = await this.actionsheetCtrl.create({
      buttons: [
        {
          text: 'Update Profile Image',
          handler: () => {
            this.selectImage();
          }
        },
        {
          text: 'Edit Account',
          handler: () => {
            if(this.userDetails) {
              this.updateMember(this.userDetails);
            }
            // this.updateProfile();
            // this.updateMember();
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.authService.logout();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async selectImage() {
    const buttons = [{
      text: 'Choose From Photos Photo',
      handler: () => {
        this.addImage(CameraSource.Photos, this.user.Id)
      }
   },
   {
    text: 'Take Photo',
    handler: () => {
      this.addImage(CameraSource.Camera, this.user.Id);
     }
   }
  ];

    if (!this.plt.is('hybrid')) {
      buttons.push({
        text: 'Choose a File',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }

    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Select Image source',
      buttons
   });

   await actionSheet.present();
  }

  async addImage(source: CameraSource, uid) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });

    const blobData = this.uploadImage.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = this.uploadImage.createFileName();

     this.uploadImage.postData(blobData, imageName,image.format, uid)
     .subscribe((data: any) => {
      console.log(data);
      if(data.success) {
        this.toast.presentToast('Successfully upload');
        this.profileImage = this.imageUrl +this.user.Id+'/'+(new Date()).getTime();
      }
    });
  }

  async updateMember(member) {
    const modal = await this.modalCtrl.create({
      component: FamilyMemberFormPage,
      componentProps: {
        uid: this.user.Id,
        member
      }
    });
    modal.onDidDismiss().then((events: any)=> {
      this.loadFamilyMembers();
    });
    return await modal.present();
  }

  loadFamilyMembers() {
    this.familyService.getMembers(this.user.Id).subscribe(res => {
      this.familyMembers = res;
    });
  }

  getUserDetails() {
    this.familyService.getMemberDetails(this.user.Id).subscribe(res => {
      this.userDetails = res;
      // console.log('wee', res);
    });
  }

  async addFamilyMember() {
    const modal = await this.modalCtrl.create({
      component: FamilyMemberFormPage,
      componentProps: {
        uid: this.user.Id
      }
    });
    modal.onDidDismiss().then((events: any)=> {
      this.loadFamilyMembers();
    });
    return await modal.present();
  }
}
