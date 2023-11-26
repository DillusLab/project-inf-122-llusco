import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DataService } from 'src/app/services/data.service';
import { getUniqueId } from './../../utils/randomid'
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() email: string = '';

  currentDate: number = Date.now();

  article: Article = {
    id: '',
    category: '',
    title: '',
    content: '',
    img: '',
    autor: '',
    date: ''
  }

  constructor(private data: DataService) { }

  async onAddArticle() {
    this.article.id = getUniqueId(8);
    this.article.autor = this.email;
    this.article.date = formatDate(this.currentDate, 'MMM d, y, h:mm:ss a', 'en-US')
    await this.data.addArticle(this.article);

    this.borarCampos();
    
    alert('Se ha agregado correctamente');
  }

  borarCampos() {
    this.article = {
      id: '',
      category: '',
      title: '',
      content: '',
      img: '',
      autor: '',
      date: ''
    }
  }
}
