import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardsNewsModule } from './components/cards-news/cards-news.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BigTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsNewsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
