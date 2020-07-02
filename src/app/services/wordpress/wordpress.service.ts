import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = `https://www.messyfamilyproject.org/wp-json/wp/v2/`;
  totalPosts = null;
  pages: any

  constructor(private http: HttpClient) { }

  getPosts(page = 1): Observable<any[]> {
    const options = {
      observe: 'response' as 'body',
      params: {
        per_page: '5',
        page: ''+page
      }
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map((resp: any) => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');

        const data = resp['body'];

        for (let post of data) {
          post.categories = [];
          if(post['_embedded']['wp:featuredmedia'] !==  undefined ) {
            post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['thumbnail'].source_url;
          }

          if(post['_embedded']['wp:term'].length ) {
            post['_embedded']['wp:term'].forEach(a => {
              if(a.length) {
                  a.forEach(b => {
                  if(b.taxonomy === 'category') {
                    post.categories.push(b.slug);
                  }
                });
              }
            });
          }

        }
        return data;
      })
    )
  }

  // if(this.post._embedded['wp:term'].length) {
  //   this.post._embedded['wp:term'].forEach(a => {
  //     if(a.length) {
  //       a.forEach(b => {
  //         if(b.taxonomy === 'category') {
  //           this.categories.push(b.slug);
  //         }
  //       });
  //     }
  //   });
  // }
  getPostContent(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map(post => {
        if(post['_embedded']['wp:featuredmedia'] !==  undefined ) {
          post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes.medium.source_url;
        }  
        return post;
      })
    )
  }
}
