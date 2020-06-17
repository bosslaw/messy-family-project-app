import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  displayUserData: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })
  }

}
