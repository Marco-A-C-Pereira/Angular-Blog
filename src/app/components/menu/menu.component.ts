import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
