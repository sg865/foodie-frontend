import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCuisinesComponent } from './show-cuisines.component';

describe('ShowCuisinesComponent', () => {
  let component: ShowCuisinesComponent;
  let fixture: ComponentFixture<ShowCuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCuisinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
