import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventsService } from 'src/app/services/events/events.service';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';
import { EventDetailsPage } from '../event-details/event-details.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  displayUserData: any;
  posts = [];
  page = 1;
  count = null;
  latestEvents = [];

  constructor(
    private authService: AuthService,
    private wp: WordpressService,
    private eventService: EventsService,
    public router: Router,
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })

    this.loadPosts();
    this.loadLatestEvents();
  }

  loadLatestEvents() {
    this.eventService.getLatestEvents().subscribe(res => {
      this.latestEvents = res;
      // console.log(res);
    });
  }

  async showEvent(event) {
    console.log('coolness');
    const modal = await this.modalCtrl.create({
      component: EventDetailsPage,
      componentProps: {
        event
      }
    });

    return await modal.present();
  }

  viewPost(post) {
    this.router.navigate(['/home/blog',post.id])
  }

  async loadPosts() {
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
    });
  }

  loadMore(event) {
    this.page++;

    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();

      // Disable infinite loading when maximum reached
      if (this.page == this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }

}
