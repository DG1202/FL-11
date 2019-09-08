import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NewsArticleComponent } from './partials/news-article/news-article.component';
import { HeaderComponent } from './partials/header/header.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { ArticleComponent } from './pages/article/article.component';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatSelectModule} from '@angular/material/';
import { NewsFilterPipe } from './shared/news.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsArticleComponent,
    HeaderComponent,
    AddArticleComponent,
    ArticleComponent,
    NewsFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
