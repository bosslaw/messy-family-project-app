import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';
import { FamilyMemberFormPage } from '../family-member-form/family-member-form.page';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  user: any;
  familyMembers: any;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private familyService: FamilyService,
    public actionsheetCtrl: ActionSheetController,
    public uploadImage: UploadImageService,
    private camera: Camera,
    public router: Router
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;

      if(this.user) {
        this.loadFamilyMembers();
      }
    })
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
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.uploadImage.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, this.user.Id);
        }
     },
     {
      text: 'Use Camera',
      handler: () => {
        this.uploadImage.takePicture(this.camera.PictureSourceType.CAMERA, this.user.Id);
       }
     },
     {
      text: 'Cancel',
      role: 'cancel'
     }]
   });
   await actionSheet.present();
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
