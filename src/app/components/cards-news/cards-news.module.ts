import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BigCardComponent } from './card-news/big-card/big-card.component';
import { SmallCardComponent } from './card-news/small-card/small-card.component';
import { CardNewsComponent } from './card-news/card-news.component';

@NgModule({
  declarations: [
    CardNewsComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CardNewsComponent
  ]
})
export class CardsNewsModule { }
