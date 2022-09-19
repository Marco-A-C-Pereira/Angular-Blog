import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../model/noticia';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() bigNews!: Noticia;

  constructor() { }

  ngOnInit(): void {

  }


}
