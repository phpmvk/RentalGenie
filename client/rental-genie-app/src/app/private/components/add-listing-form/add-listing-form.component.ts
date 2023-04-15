import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/api-client.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent {

  addListingForm!: FormGroup;

  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(
    private fb: FormBuilder,
    private api: ApiClientService
    ) {
    this.addListingForm = this.fb.group({
      agency_id: ['', Validators.required],
      address: ['', Validators.required],
      post_code: ['', Validators.required],
      owner_name: ['', Validators.required],
      owner_contact: ['', Validators.required],
      size: [null],
      bedrooms: [null],
      bathrooms: [null],
      description: ['', Validators.required],
      rent_amount: [null],
      showing_weekdays: new FormGroup({
        Monday: new FormControl(false),
        Tuesday: new FormControl(false),
        Wednesday: new FormControl(false),
        Thursday: new FormControl(false),
        Friday: new FormControl(false),
      }),
      showing_hours: ['', Validators.required],
      available: [true],
      tenant_requirements: ['', Validators.required],
    });
  }

  onSubmit() {
    const selectedDays = this.weekdays.filter(day => this.addListingForm.value.showing_weekdays[day]);
    this.addListingForm.patchValue({showing_weekdays: selectedDays});
    console.log(this.addListingForm.value);
    const newListing = this.addListingForm.value
    console.log(this.addListingForm.value.showing_weekdays);
    const showingDays = this.addListingForm.value.showing_weekdays
    const showingDaysArray = []
    for (let day in showingDays) {
      if (showingDays[day] === true) showingDaysArray.push(day)
    }
    newListing.showing_weekdays = showingDaysArray
    console.log('Corrected Listing', newListing)
    this.api.postNewListing(newListing).subscribe(res => console.log(res))
  }
}
