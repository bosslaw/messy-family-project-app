import { Component, OnInit } from '@angular/core';
// import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';
import { FamilyMemberAddPage } from '../family-member-add/family-member-add.page';

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
    // private camera: Camera
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
          text: 'Upload Profile',
          handler: () => {
            console.log('Upload clicked');
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

  // async selectImage() {
  //   const actionSheet = await this.actionsheetCtrl.create({
  //     header: 'Select Image source',
  //     buttons: [{
  //       text: 'Load from Library',
  //       handler: () => {
  //         this.uploadImage.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //       }
  //    },
  //    {
  //     text: 'Use Camera',
  //     handler: () => {
  //       this.uploadImage.takePicture(this.camera.PictureSourceType.CAMERA);
  //      }
  //    },
  //    {
  //     text: 'Cancel',
  //     role: 'cancel'
  //    }]
  //  });
  //  await actionSheet.present();
  // }

  loadFamilyMembers() {
    this.familyService.getMembers(this.user.Id).subscribe(res => {
      this.familyMembers = res;
    });
  }

  async addFamilyMember() {
    const modal = await this.modalCtrl.create({
      component: FamilyMemberAddPage,
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
