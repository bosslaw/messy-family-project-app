import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';
import { FamilyMemberFormPage } from '../family-member-form/family-member-form.page';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
const { Camera } = Plugins;
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  imageUrl = environment.imageUrl;
  profileImage = '';
  user: any;
  familyMembers: any;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

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
      }
    })
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

  async showProfileOptions() {
    const actionSheet = await this.actionsheetCtrl.create({
      buttons: [
        {
          text: 'Update Profile',
          handler: () => {
            this.router.navigate(['home/account-edit']);
          }
        },
        {
          text: 'Update Profile Image',
          handler: () => {
            this.selectImage();
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
