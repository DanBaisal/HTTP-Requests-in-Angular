import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Important for our request to work

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
