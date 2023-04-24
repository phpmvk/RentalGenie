import { Component, Input } from '@angular/core';

export type NavLink = {
  href: string;
  name: string;
  icon: string;
  footer?: boolean;
};

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  @Input()
  navLinks: NavLink[] = [];

  expandNav() {
    const nav = document.getElementsByClassName('nav');
    nav[0].classList.toggle('open');
  }

}
