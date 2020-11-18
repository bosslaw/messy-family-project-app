import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.page.html',
  styleUrls: ['./blog-view.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogViewPage implements OnInit {
  post: any;
  categories=[];

  constructor(
    private route: ActivatedRoute,
    private wp: WordpressService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
      if(this.post._embedded['wp:term'].length) {
        this.post._embedded['wp:term'].forEach(a => {
          if(a.length) {
            a.forEach(b => {
              if(b.taxonomy === 'category') {
                this.categories.push(b.slug);
              }
            });
          }
        });
      }
    });
  }

}
