import { Injectable } from '@angular/core';
import {  LoadingController } from '@ionic/angular';
import { HttpService } from '../http/http.service';
import { finalize } from 'rxjs/operators';
import { CameraSource, Plugins, CameraResultType } from '@capacitor/core';
import { environment } from 'src/environments/environment';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  lastImage: any;

  url = environment.apiUrl;

  constructor(
    private http: HttpService,
    private loader: LoadingController
  ) { }

  async uploadImageFile(file: any, uid) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('uid', uid);

    return this.http.post2('upload', formData).pipe(finalize(() => {
    }))
    .subscribe(data => {
    }, err => {
      console.error('Error uploading the file')
    })
  }


  postData(blobData, name, ext, uid) {

    const formData = new FormData();
    formData.append('file', blobData, `name.${ext}`);
    formData.append('uid', uid);

    return this.http.post('upload', formData);
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  createFileName() {
    const d = new Date();
    return d.getTime()
  }
}
