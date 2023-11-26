import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  artCollection: string = 'articles';

  constructor(private fireStore: Firestore) { }
  // add article
  addArticle(article: Article) {
    const artDoc = doc(this.fireStore, this.artCollection, article.id);
    return setDoc(artDoc, article);
    /*const articleRef = collection(this.fireStore, 'articles', article.id);
    return addDoc(articleRef, article);*/
  }

  getArticles(): Observable<Article[]> {
    const artRef = collection(this.fireStore, this.artCollection);
    return collectionData(artRef, { idField: 'date' }) as Observable<Article[]>;
  }
}
