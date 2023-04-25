import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `],
})
export class AuthComponent {

    constructor(
      private router: Router
    ) {}

}
