import { Component } from '@angular/core';
import { Router } from '@angular/router';
import type { NavLink } from '../shared/components/navbar';

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
  constructor(private router: Router) {}

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
      href: '#',
      name: 'SIGN ME UP',
      icon: 'tree',
      special: true,
    },
  ];
}
