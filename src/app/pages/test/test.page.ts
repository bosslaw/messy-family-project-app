import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { UploadImageService } from 'src/app/services/upload-image/upload-image.service';
// import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(
    // private authService: AuthService,
    public actionsheetCtrl: ActionSheetController,
    public uploadImage: UploadImageService,
    private camera: Camera,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  async showOptions() {
    const actionSheet = await this.actionsheetCtrl.create({
      buttons: [
        {
          text: 'Upload Profile',
          handler: () => {
            this.selectImage();
          }
        },
        {
          text: 'Logout',
          handler: () => {
            // this.authService.logout();
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
          this.platform.ready().then(() => {
            this.uploadImage.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          })
        }
     },
     {
      text: 'Use Camera',
      handler: () => {
        this.platform.ready().then(() => {
          this.uploadImage.takePicture(this.camera.PictureSourceType.CAMERA);
        })
       }
     },
     {
      text: 'Cancel',
      role: 'cancel'
     }]
   });
   await actionSheet.present();
  }

}
