import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemsComponent } from './books-items.component';

describe('BooksItemsComponent', () => {
  let component: BooksItemsComponent;
  let fixture: ComponentFixture<BooksItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
