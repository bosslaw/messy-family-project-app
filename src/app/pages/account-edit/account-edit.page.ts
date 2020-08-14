import { Component, OnInit } from '@angular/core';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.page.html',
  styleUrls: ['./account-edit.page.scss'],
})
export class AccountEditPage implements OnInit {

  public userData = {
    id: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: ''
  }


  constructor(private storageService: StorageService, private userService: UserService, private toastService: ToastService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then((res: any) => {
      this.userData.id = res.Id;
      this.userData.email = res.Email;
      this.userData.first_name = res.FirstName;
      this.userData.last_name = res.LastName;
      this.userData.address_1 = res.StreetAddress1;
      this.userData.address_2 = res.StreetAddress2;
      this.userData.city = res.City;
      this.userData.state = res.State;
      this.userData.country = res.Country;
    });
  }

  editAccountAction() {
    if(!this.userData.password) {
      delete this.userData.password;
    }

    this.userService.updateUser(this.userData).subscribe((res: any) => {
      if(res.userData) {
        this.toastService.presentToast('Information successfully updated');
      } else {
        this.toastService.presentToast('Error adding information');
      }
    },
    (error: any) => {
      this.toastService.presentToast('Network Connection Error');
    })
  }

}
