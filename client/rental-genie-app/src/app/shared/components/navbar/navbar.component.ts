import { Component, Input } from '@angular/core';
import { NavLink } from './types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input()
  navLinks: NavLink[] = [];

  expandNav() {
    const nav = document.getElementsByClassName('nav');
    nav[0].classList.toggle('open');
  }
}
