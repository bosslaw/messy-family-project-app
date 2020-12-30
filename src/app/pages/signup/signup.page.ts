import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public postData = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    unformatted_date: new Date(),
    birth_date: '',
    rid: null,

    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    gender: '',
    religion: ''
  }

  relationships = [
    {id: 1, name: 'Myself'},
    {id: 2, name: 'Spouse'},
    {id: 3, name: 'Son'},
    {id: 4, name: 'Daughter'}
  ];


  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  validateInputs() {
    const email = this.postData.email.trim();
    const password = this.postData.password.trim();
    const firstName = this.postData.password.trim();
    const lastName = this.postData.password.trim();

    return (
          this.postData.email && this.postData.password && this.postData.first_name &&
          this.postData.last_name && this.postData.rid && this.postData.unformatted_date &&
          email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0
          )
  }

  signupAction() {
    if(this.validateInputs()) {
      const birthDate = moment(this.postData.unformatted_date).format('YYYY-MM-DD 00:00:00')
      this.postData.birth_date = birthDate;

      this.authService.signup(this.postData).subscribe((res: any) => {
        if(res.userData) {
          this.router.navigate(['login'])
        } else {
          this.toastService.presentToast('Error adding information');
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Connection Error');
      })
    } else {
      this.toastService.presentToast('Please give some information');
    }
  }

}
