import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @HostBinding('attr.class') cssClass = 'row';
  article : Article;
  // votes : number;
  // title : string;
  // link : string;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;
  }
  ngOnInit(): void {
  }

  voteUp() {
    this.article.voteUp();
    // this.votes += 1;

    return false;
  }

  voteDown() {
    this.article.voteDown();
    // this.votes -= 1;
    return false;
  }

}
