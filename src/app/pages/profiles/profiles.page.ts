import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';
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
    private familyService: FamilyService
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
