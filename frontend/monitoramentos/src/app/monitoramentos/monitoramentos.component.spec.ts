import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoramentosComponent } from './monitoramentos.component';

describe('MonitoramentosComponent', () => {
  let component: MonitoramentosComponent;
  let fixture: ComponentFixture<MonitoramentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoramentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
