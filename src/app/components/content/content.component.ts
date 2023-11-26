import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articles: Article[];

  constructor(private data: DataService) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.data.getArticles().subscribe( value => {
      this.articles = value;
    })
  }
}
