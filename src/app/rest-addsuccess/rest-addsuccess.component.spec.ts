import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAddsuccessComponent } from './rest-addsuccess.component';

describe('RestAddsuccessComponent', () => {
  let component: RestAddsuccessComponent;
  let fixture: ComponentFixture<RestAddsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestAddsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestAddsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
