import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  posts = [];
  page = 1;

  constructor(
    private wp: WordpressService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.wp.getPosts(1, 10).then((data: any) => {
      this.posts = data;
    });
  }

  viewPost(post) {
    this.router.navigate(['/public/blog',post.id])
  }

  loadMore(event) {
    this.page++;

    this.wp.getPosts(this.page, 5).then((data: any) => {
      this.posts = [...this.posts, ...data];
      event.target.complete();
    });
  }


  
}
