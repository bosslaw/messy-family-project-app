import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
    ) { }

  ngOnInit() {
  }

  validateInputs() {
    const email = this.postData.email.trim();
    const password = this.postData.password.trim();

    return (this.postData.email && this.postData.password && email.length > 0 && password.length > 0)
  }

  loginAction() {

    if(this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        if(res.userData.length) {
          this.storageService.store(AuthConstants.AUTH, res.userData[0]);
          this.router.navigate(['home'])
        } else {
          this.toastService.presentToast('Invalid credentials');
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
