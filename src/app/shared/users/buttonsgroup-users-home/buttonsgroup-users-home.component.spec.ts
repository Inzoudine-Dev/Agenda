import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsgroupUsersHomeComponent } from './buttonsgroup-users-home.component';

describe('ButtonsgroupUsersHomeComponent', () => {
  let component: ButtonsgroupUsersHomeComponent;
  let fixture: ComponentFixture<ButtonsgroupUsersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsgroupUsersHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsgroupUsersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
