import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello Root Cave";
  imageUrl = "http://lorempixel.com/400/200/sports/1";
  color: string = 'yellow';

  people = [
    {
      "name": "Mahmoud kotoury",
      "age": 27,
      "country": "EGYPT"
    },
    {
      "name": "Yasmine mohamed",
      "age": 34,
      "country": "GERMANY"
    },
    {
      "name": "John doe",
      "age": 34,
      "country": "USA"
    },
    {
      "name": "Jane doe",
      "age": 35,
      "country": "UK"
    },
    {
      "name": "Ali ahmed",
      "age": 24,
      "country": "QATAR"
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

  getColor(country) {
    switch (country) {
      case 'EGYPT':
        return "green";
      case 'USA':
        return "blue";
      case 'UK':
        return "brown";
      case 'GERMANY':
        return "red";
      default:
        return "yellow";
    }
  }


  onClick() {
    console.log('you clicked button');
  }

  onClick1($event) {
    console.log('you clicked button ' + $event.target.textContent);
  }
}
