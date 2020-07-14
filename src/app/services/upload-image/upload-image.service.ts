import { Injectable } from '@angular/core';
// import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { File, FileEntry } from '@ionic-native/File/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { LoadingController, Platform } from '@ionic/angular';
// import { finalize } from 'rxjs/operators';

const STORAGE_KEY = 'my_images'

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  images: any;

  constructor(
    // private camera: Camera,
    // private plt: Platform,
    // private http: HttpClient,
    // private filePath: FilePath,
    // private file: File,
    // private storage: Storage,
    // private webview: WebView,
    // private loadingController: LoadingController
  ) { }

  /*
  takePicture(sourceType: PictureSourceType) {
    this.plt.ready().then(() => {
      const options: CameraOptions = {
        quality: 100,
        sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === 
        this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath).then(filePath => {
          const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          const currentName = imagePath.substring(
            imagePath.lastIndexOf('/') + 1,
            imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(
            correctPath,
            currentName,
            this.createFileName()
          );
        });
       } else {
        const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(
          correctPath,
          currentName,
          this.createFileName()
        );
       }
      });
    })
    
  }

  createFileName() {
      const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
      return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(
      success => {
        this.updateStoredImages(newFileName);
        // this.presentToast('Success while storing file.');
      },
      error => {
        // this.presentToast('Error while storing file.');
      });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = [];
      if (images && images !== '' && images.length > 0) {
        arr = JSON.parse(images);
      } else {
        arr = [];
      }
      if (!arr) {
        const newImages = [name];
        this.storage.set('my_images', JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set('my_images', JSON.stringify(arr));
      }
     const filePath = this.file.dataDirectory + name;
     const resPath = this.pathForImage(filePath);
     const newEntry = {
        name,
        path: resPath,
        filePath
     };
     this.images = [newEntry, ...this.images];
   });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  startUpload(imgEntry, position) {
    this.file
      .resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file, imgEntry, position));
    })
    .catch(err => {
      // this.presentToast('Error while reading file.');
    });
 }

 readFile(file: any, imgEntry, position) {
    const reader = new FileReader();
    reader.onload = () => {
    const formData = new FormData();
    const imgBlob = new Blob([reader.result], {
      type: file.type
    });
    formData.append('file', imgBlob, file.name);
    this.uploadImageData(formData, imgEntry, position);
  };
  reader.readAsArrayBuffer(file);
  }

async uploadImageData(formData: FormData, imgEntry, position) {
    const loading = await this.loadingController.create({
      message: 'Uploading image...'
    });
    await loading.present();
    this.http.post(`<<YOUR API>>`, formData).pipe(finalize(() => {
      loading.dismiss();
    })
  )
    .subscribe(res => {
      if (res['success']) {
        // this.presentToast('File upload complete.');
      } else {
        // this.presentToast('File upload failed.');
      }
    });
  }
  
*/

}
