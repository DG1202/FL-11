import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public newsType: string[] = this.data.getNewsTypeList() ;
  public currNewsType: number = this.data.getNewsType();
  public allNews = 'All news';
  public selected = this.newsType[this.currNewsType] || this.allNews;
  protected form: FormGroup;

  @Input()
  public isMainPage = true;

  constructor(private fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.form = this.fb.group({
      filterValue: [''],
    });
    this.currNewsType = this.data.getNewsType();
  }

  onChange(event) {
    this.data.changeCurrNewsType(this.newsType.indexOf(event));
  }

  filter() {
    this.data.filserString = this.form.value.filterValue;
  }
}
