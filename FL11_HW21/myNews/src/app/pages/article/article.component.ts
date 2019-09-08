import {Component, Input, OnInit} from '@angular/core';
import { NewsArticleComponent } from '../../partials/news-article/news-article.component';
import { ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  newsList: object = [];
  index = 1;
  constructor(private data: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsList = this.data.getCurrentNewsType();
    this.router.params.subscribe((params) => {
      this.index = params.index;
    });
  }

}
