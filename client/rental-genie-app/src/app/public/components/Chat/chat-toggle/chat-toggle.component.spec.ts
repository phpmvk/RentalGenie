import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToggleComponent } from './chat-toggle.component';

describe('ChatToggleComponent', () => {
  let component: ChatToggleComponent;
  let fixture: ComponentFixture<ChatToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
