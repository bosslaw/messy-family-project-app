import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept','application/json');

    const options = { header: headers, withCredentials: false};

    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data, options)

  }

  get(serviceName: string, data: any = []) {

    const url = environment.apiUrl + serviceName;
    const params = Object.keys(data).map(key => key + '=' + data[key]).join('&');

    return this.http.get(url + '?'+ params)

  }
}
