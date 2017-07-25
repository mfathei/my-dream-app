import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello Root Cave";
  imageUrl = "http://lorempixel.com/400/200/sports/1";


  people = [
    {
      "name": "Mahmoud kotoury"
    },
    {
      "name": "Yasmine mohamed"
    },
    {
      "name": "John doe"
    },
    {
      "name": "Jane doe"
    }
  ];

  peopleByCountry = [
    {
      "country": "EGYPT",
      "people": [
        {
          "name": "Mahmoud"
        },
        {
          "name": "Yasmine"
        }
      ]
    },
    {
      "country": "USA",
      "people": [
        {
          "name": "John"
        },
        {
          "name": "Jane"
        }
      ]
    }
  ];

  onClick() {
    console.log('you clicked button');
  }

  onClick1($event) {
    console.log('you clicked button ' + $event.target.textContent);
  }
}
