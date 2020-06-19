import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-thumbnails',
  templateUrl: './blog-thumbnails.component.html',
  styleUrls: ['./blog-thumbnails.component.scss'],
})
export class BlogThumbnailsComponent implements OnInit {

  @Input() post;
  @Output() postClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  viewPost(post) {
    this.postClicked.emit(post);
  }
}
