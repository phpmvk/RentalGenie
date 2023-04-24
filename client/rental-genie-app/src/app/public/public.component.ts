import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from '../shared/components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [
    `
      :host {
        display: flex;
        height: 100vh;
      }
    `,
  ],
})
export class PublicComponent {

  publicNavLinks: NavLink[] = [
    {
      href: './home',
      name: 'Home',
      icon: 'house',
    },
    {
      href: '#',
      name: 'My Favourites',
      icon: 'star',
    },
    {
      href: '/auth',
      name: 'Agent Login',
      icon: 'vault',
      footer: true,
    },
  ];

  constructor(
    private router: Router
  ){}



}
