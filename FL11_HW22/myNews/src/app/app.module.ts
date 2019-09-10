import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NewsArticleComponent } from './partials/news-article/news-article.component';
import { HeaderComponent } from './partials/header/header.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { ArticleComponent } from './pages/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatSelectModule } from '@angular/material/';
import { NewsFilterPipe } from './shared/news.filter.pipe';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';


export const firebaseConfig = {
  apiKey: 'AIzaSyASTMxlmHs9oHzOYqbIa7vNre9WQRQxsEU',
  authDomain: 'newsapp-fd5b5.firebaseapp.com',
  databaseURL: 'https://newsapp-fd5b5.firebaseio.com',
  projectId: 'newsapp-fd5b5',
  storageBucket: 'newsapp-fd5b5.appspot.com',
  messagingSenderId: '115007208839',
  appId: '1:115007208839:web:a0f674aaab621e51506722'
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
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
