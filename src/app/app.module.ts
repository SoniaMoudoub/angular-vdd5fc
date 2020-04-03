import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,    RouterModule.forRoot([
      { path: '', component: BookListComponent },
    ]) ],
  declarations: [ AppComponent, TopBarComponent, BookListComponent, ProductAlertsComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }





