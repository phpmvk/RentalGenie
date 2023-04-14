import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualListingComponent } from './individual-listing.component';

describe('IndividualListingComponent', () => {
  let component: IndividualListingComponent;
  let fixture: ComponentFixture<IndividualListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
