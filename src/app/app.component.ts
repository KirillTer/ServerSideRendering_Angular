import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const POSTS_KEY = makeStateKey('posts');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (
    private $http: Http,
    private $state: TransferState
  ) {}
  title = 'app';
  posts: any;

  ngOnInit () {
    this.posts = this.$state.get(POSTS_KEY, null as any);

    if ( !this.posts ) {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').subscribe( data => {
        this.posts = data.json();
      });
    }
  }
}
