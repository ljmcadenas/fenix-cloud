import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="text-center">::Hangman::</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
      padding-bottom: 20px;
      border-radius: 10px;
      max-width: 600px;
      background-color: #FED13A
    }
  `]
})
export class AppComponent { }
