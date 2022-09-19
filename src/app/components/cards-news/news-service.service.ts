import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Noticia } from './card-news/model/noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private url = 'http://localhost:3000/news';

  constructor(private httpClient: HttpClient) { }

  getNoticia(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }
}
