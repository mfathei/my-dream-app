import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rootcaveschool',
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
