import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMonitoramentosComponent } from './add-edit-monitoramentos.component';

describe('AddEditMonitoramentosComponent', () => {
  let component: AddEditMonitoramentosComponent;
  let fixture: ComponentFixture<AddEditMonitoramentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMonitoramentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMonitoramentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
