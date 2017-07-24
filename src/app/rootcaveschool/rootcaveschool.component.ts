import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-rootcaveschool', as an element
  // selector: '[app-rootcaveschool]', as an attribute
  selector: '.app-rootcaveschool', // as a class
  template: `
  <app-rootcave></app-rootcave>
  <app-rootcave></app-rootcave>`,
  styleUrls: ['./rootcaveschool.component.css']
})
export class RootcaveschoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
