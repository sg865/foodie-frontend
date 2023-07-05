import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineAddsuccessComponent } from './cuisine-addsuccess.component';

describe('CuisineAddsuccessComponent', () => {
  let component: CuisineAddsuccessComponent;
  let fixture: ComponentFixture<CuisineAddsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineAddsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineAddsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
