import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  @HostBinding('attr.class') cssClass = 'row';

  @Input()
  article! : Article;

  constructor() {
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
