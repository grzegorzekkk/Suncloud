import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementModalComponent } from './add-measurement-modal.component';

describe('AddMeasurementModalComponent', () => {
  let component: AddMeasurementModalComponent;
  let fixture: ComponentFixture<AddMeasurementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeasurementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasurementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
