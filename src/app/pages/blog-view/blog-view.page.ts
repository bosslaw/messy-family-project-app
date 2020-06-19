import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.page.html',
  styleUrls: ['./blog-view.page.scss'],
})
export class BlogViewPage implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private wp: WordpressService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
    });
  }

}
