import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    AlertModule.forRoot()
  ],
  declarations: [CharactersComponent]
})
export class CharactersModule { }
