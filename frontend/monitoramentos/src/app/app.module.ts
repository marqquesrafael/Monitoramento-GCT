import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonitoramentosComponent } from './monitoramentos/monitoramentos.component';
import { ShowMonitoramentosComponent } from './monitoramentos/show-monitoramentos/show-monitoramentos.component';
import { AddEditMonitoramentosComponent } from './monitoramentos/add-edit-monitoramentos/add-edit-monitoramentos.component';
import { MonitoramentosApiService } from './monitoramentos-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MonitoramentosComponent,
    ShowMonitoramentosComponent,
    AddEditMonitoramentosComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [MonitoramentosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
