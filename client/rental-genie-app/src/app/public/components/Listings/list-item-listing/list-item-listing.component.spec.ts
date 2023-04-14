import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemListingComponent } from './list-item-listing.component';

describe('ListItemListingComponent', () => {
  let component: ListItemListingComponent;
  let fixture: ComponentFixture<ListItemListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
