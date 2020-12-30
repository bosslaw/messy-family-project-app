import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventsService } from 'src/app/services/events/events.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';
import { EventDetailsPage } from '../event-details/event-details.page';
import { EventFormPage } from '../event-form/event-form.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  displayUserData: any;
  posts = [];
  page = 1;
  count = null;
  latestEvents = [];
  currentDay = new Date();

  constructor(
    private authService: AuthService,
    private wp: WordpressService,
    private eventService: EventsService,
    public router: Router,
    public modalCtrl: ModalController,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.loadPosts();
  }

  ionViewWillEnter() {
    this.authService.userData$.subscribe((res: any) => {
      this.user = res;
      if(this.user) {
        this.loadLatestEvents();
      }
    })
  }

  formatToDate(date) {
    return moment(date).format('LL');
  }

  loadLatestEvents() {
    this.eventService.getLatestEvents(this.user.Id).subscribe(res => {
      this.latestEvents = res;
    });
  }

  async showEvent(event) {
    const modal = await this.modalCtrl.create({
      component: EventDetailsPage,
      componentProps: {
        event
      }
    });

    return await modal.present();
  }

  async addEventModal() {
    const modal = await this.modalCtrl.create({
      component: EventFormPage,
      componentProps: {
        preselectedDate:this.currentDay
      }
    });

    modal.onDidDismiss().then((event: any)=> {
      if(event.data) {
        this.addEvent(event.data);
      }
    });

    return await modal.present();
  }

  addEvent(event) {

    const formattedEvent = {
      title: event.title,
      start_date:  moment(event.start_date).format('YYYY-MM-DD hh:mm'),
      end_date: moment(event.end_date).format('YYYY-MM-DD hh:mm'),
      // allDay: event.data.allDay,
      description: event.description,
      location: event.location,
      uid: this.user.Id,
      status: 'Upcoming'
    };

    this.eventService.addEvent(formattedEvent).subscribe((res: any) => {
      if(res.success) {
        this.loadLatestEvents();
      }
    },
    (error: any) => {
    });
  }

  viewPost(post) {
    this.router.navigate(['/home/blog',post.id])
  }

  loadPosts() {
    this.wp.getPosts().then((data: any) => {
      this.posts = data;
    });
  }

  loadMore(event) {
    this.page++;

    this.wp.getPosts(this.page).then((data: any) => {
      this.posts = [...this.posts, ...data];
      event.target.complete();
    });
  }

}
