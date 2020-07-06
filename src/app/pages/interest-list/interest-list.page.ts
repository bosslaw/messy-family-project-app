import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.page.html',
  styleUrls: ['./interest-list.page.scss'],
})
export class InterestListPage implements OnInit {

  posts = [];
  count: any;
  page = 1;
  tagId: any;

  constructor(
    private wp: WordpressService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.tagId = this.route.snapshot.paramMap.get('id');
    if(this.tagId) {
      this.loadPosts();
    }
  }

  viewPost(post) {
    this.router.navigate(['/home/blog',post.id])
  }

  loadPosts() {
    this.wp.getPostsByTag(this.page, this.tagId).subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
    });
  }

  loadMore(event) {
    this.page++;

    this.wp.getPostsByTag(this.page, this.tagId).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();
      
      // Disable infinite loading when maximum reached
      if (this.page === this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }

}
