import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CharactersModule } from './characters/characters.module'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
