import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingFormComponent } from './add-listing-form.component';

describe('AddListingFormComponent', () => {
  let component: AddListingFormComponent;
  let fixture: ComponentFixture<AddListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
