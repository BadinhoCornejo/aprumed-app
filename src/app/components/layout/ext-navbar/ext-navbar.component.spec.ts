import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtNavbarComponent } from './ext-navbar.component';

describe('ExtNavbarComponent', () => {
  let component: ExtNavbarComponent;
  let fixture: ComponentFixture<ExtNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
