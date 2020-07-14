import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

declare var cordova: any;
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  lastImage: any;

  constructor(
    private camera: Camera,
    private platform: Platform,
    private filePath: FilePath,
    private file: File
  ) { }

  takePicture(sourceType) {
    // Create options for the Camera Dialog
    const options = {
      quality: 100,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            // console.log(correctPath, currentName);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        console.log(correctPath, currentName);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      console.log('error', err);
      // this.globals.presentToast('Error while selecting image.');
    });
  }

  createFileName() {
    const d = new Date(),
    n = d.getTime(),
    newFileName =  n + '.jpg';
    return newFileName;
  }


  copyFileToLocalDir(namePath: string, currentName: string, newFileName: string) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.uploadPhoto(newFileName);
    }, error => {
      console.log('Error while storing file');
    });
  }

  pathForImage(img: string) {
    let result = '';
    if (img !== null) {
      result = cordova.file.dataDirectory + img;
    }
    return result;
  }

  uploadPhoto(imageName: string) {
    this.lastImage = imageName;
    const targetPath = this.pathForImage(imageName);
    this.file.resolveLocalFilesystemUrl(targetPath)
    .then(entry => (entry as FileEntry).file(file => this.readFile(file)))
    .catch(err => {
      console.log(err);
    });
  }

  readFile(file: any) {
    const reader = new FileReader();
    // this.showLoader();
    reader.onloadend = () => {
      const formData: FormData = new FormData();
      const imgBlob: Blob = new Blob([reader.result], {type: file.type});
      formData.append('file', imgBlob, file.name);
      console.log(formData);
      // switch(this.userInfo['type']) {
      //   case 'Student':
      //     formData.append('student_id', this.userInfo['id']);
      //     break;
      //   case 'Coach':
      //     formData.append('coach_id', this.userInfo['id']);
      //     break;
      //   default:
      //     break;
      // }
      // this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  }
}
