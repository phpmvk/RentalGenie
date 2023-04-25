import { Component } from '@angular/core';

@Component({
  selector: 'app-add-listing',
  template: `
    <div class="form-container">
      <app-add-listing-form></app-add-listing-form>
    </div>
  `,
  styles: [`
    .form-container {
      margin: 10px;
      padding: 10px;
      background-color: rgb(246, 244, 244);
      border-radius: 10px;
      min-width: 80vw;
      display: flex;
      justify-content: center;
    }
  `],
})
export class AddListingComponent {

}
