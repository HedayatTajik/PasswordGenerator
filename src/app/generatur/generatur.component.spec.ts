import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraturComponent } from './generatur.component';

describe('GeneraturComponent', () => {
  let component: GeneraturComponent;
  let fixture: ComponentFixture<GeneraturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
