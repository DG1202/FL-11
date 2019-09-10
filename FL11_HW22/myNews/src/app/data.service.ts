import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currNewsType = 1;
  public filserString = '';

  public data: any[];

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public afs: AngularFirestore, private db: AngularFirestore) {
    this.itemsCollection = afs.collection('newsList');
    // this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getItems() {
    return this.items;
  }
  getIdsList() {
    return this.data.map(v => v.id);
  }

  getCurrentNewsType(): any[] {
    if (this.currNewsType === -1) {
      return this.data.reduce((acc, v) => acc.concat(v.data) , []);
    }
    return this.data[this.currNewsType].data;
  }

  addNewArticle(article) {
    // this.data[this.currNewsType].data.push(article);
     this.db.collection<Type>("newsList").doc<Item>('D2MKJFcCAwkbDK6HCywp').collection<NewsList>('data').add(article);

  }

  getNewsType() {
    return this.currNewsType;
  }

  getNewsTypeList() {
    return this.data.map(v => v.title);
  }

  changeCurrNewsType(newType) {
    this.currNewsType = newType;
  }
}

interface Type {
  [index: number]: { title: string };
}

interface Item {
  title?: string;
  data?: object;
  id?: string;
}

interface NewsList {
  [index: number]: { title: string };
}

