import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  public newsList = [];
  public isAdded = false;
  protected form: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService) {}

  protected sendMessage() {
    this.isAdded = true;
    this.data.addNewArticle(this.form.value);
    this.form.reset();
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', [Validators.required, Validators.minLength(8)]],
      text: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      sourceUrl: ['', [Validators.required, Validators.minLength(6)]],
      author: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.newsList = this.data.getCurrentNewsType();
  }

  protected sendMoreMessage() {
    this.isAdded = false;
  }

}



