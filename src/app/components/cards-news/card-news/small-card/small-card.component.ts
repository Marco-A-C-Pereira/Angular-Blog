import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../model/noticia';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() smallNews!: Noticia;

  constructor( ) { }

  ngOnInit(): void {
  }

}
