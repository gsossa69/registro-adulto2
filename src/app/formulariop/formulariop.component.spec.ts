import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopComponent } from './formulariop.component';

describe('FormulariopComponent', () => {
  let component: FormulariopComponent;
  let fixture: ComponentFixture<FormulariopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
