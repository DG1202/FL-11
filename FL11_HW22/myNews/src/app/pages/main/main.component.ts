import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  newsList: object = [];
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getItems().subscribe(items => {
      this.newsList = items;
      this.data.data = items;
    });
  }

}
