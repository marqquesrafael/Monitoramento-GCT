import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMonitoramentosComponent } from './show-monitoramentos.component';

describe('ShowMonitoramentosComponent', () => {
  let component: ShowMonitoramentosComponent;
  let fixture: ComponentFixture<ShowMonitoramentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMonitoramentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMonitoramentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
