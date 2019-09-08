import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {AddArticleComponent} from './pages/add-article/add-article.component';
import {ArticleComponent} from './pages/article/article.component';


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'article/:index', component: ArticleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
