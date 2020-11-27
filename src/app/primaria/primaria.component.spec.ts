import { ComponentFixture, TestBed } from '@angular/core/testing';

import { primariaComponent } from './primaria.component';

describe('PrimariaComponent', () => {
  let component: primariaComponent;
  let fixture: ComponentFixture<primariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ primariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(primariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
