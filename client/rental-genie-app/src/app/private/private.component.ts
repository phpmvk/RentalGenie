import { Component } from '@angular/core';
import { NavLink } from '../../app/shared/components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styles: [
    `
      :host {
        display: flex;
        height: 100vh;
      }
    `,
  ],
})
export class PrivateComponent {

  privateNavLinks: NavLink[] = [
    {
      href: './home',
      name: 'Dashboard',
      icon: 'envelopes-bulk',
    },
    {
      href: '/private/calendar',
      name: 'My Calendar',
      icon: 'calendar-days',
    },
    {
      href: '/private/mylistings',
      name: 'My Listings',
      icon: 'people-roof',
    },
    {
      href: '/private/add-listing',
      name: 'Add Listing',
      icon: 'plus',
    },
    {
      href: '/public/home',
      name: 'Log Out',
      icon: 'arrow-right-from-bracket',
      footer: true,
    },
  ]

}
