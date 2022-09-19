import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Noticia } from './model/noticia';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {
  news: Noticia[] = [];

  constructor(private newsService: NewsServiceService ) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(){
    this.newsService.getNoticia().subscribe({
      next: aws => {
        this.news = aws;
      },
      error: err => console.log("Error: "+err),
      complete: () => console.log(this.news)
    })
  }
}
