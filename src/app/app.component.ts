import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the title variable';
  counter = 56;

  constructor() {
    console.log('im the constructor for the AppComponent');
    this.sayHello();
  }

  increaseCounter() {
    this.counter += 1;
  }

  sayHello() {
    const name = 'Doug';
    console.log(name);
  }
}
