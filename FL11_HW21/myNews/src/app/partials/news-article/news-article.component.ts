import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {
  @Input() newsItem: {};
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
