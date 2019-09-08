import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'newsFilter'
})

export class NewsFilterPipe implements PipeTransform {
  transform(news: any[], search: string = ''): any[] {
    if (!search.trim()) {
      return news;
    }
    return news.filter(newsItem => {
      return newsItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
