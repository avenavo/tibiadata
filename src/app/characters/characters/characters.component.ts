import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  template: require('pug-loader!./characters.component.pug')(),
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
