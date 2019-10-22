import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntNavbarComponent } from './int-navbar.component';

describe('IntNavbarComponent', () => {
  let component: IntNavbarComponent;
  let fixture: ComponentFixture<IntNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
