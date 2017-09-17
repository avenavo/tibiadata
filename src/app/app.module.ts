import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CharactersModule } from './characters/characters.module'
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
