import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MonitoramentosApiService } from 'src/app/monitoramentos-api.service';

@Component({
  selector: 'app-add-edit-monitoramentos',
  templateUrl: './add-edit-monitoramentos.component.html',
  styleUrls: ['./add-edit-monitoramentos.component.css']
})
export class AddEditMonitoramentosComponent implements OnInit {

  

  constructor(private service:MonitoramentosApiService) { }

  @Input() monitoramento:any;
   id: number = 0;
   placa: string = "";
   data_inicio: Date | null = new Date();
   data_termino: Date | null = new Date();
  

  ngOnInit(): void {
    this.id = this.monitoramento.id;
    this.placa = this.monitoramento.placa;
    this.data_inicio = this.monitoramento.data_inicio;
    this.data_termino = this.monitoramento.data_termino;
  }

  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }

  addMonitoramento(){
    var monitoramento = {
      placa: this.placa,
      data_inicio: this.data_inicio,
      data_termino: this.data_termino
    }
    this.service.addMonitoramento(monitoramento).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close')
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = 'none';
        }
      },4000);
    })
  }
  updateMonitoramento(){
    var monitoramento = {
      id: this.id,
      placa: this.placa,
      data_inicio: this.data_inicio,
      data_termino: this.data_termino
    }

    var id:number = this.id;

    this.service.updateMonitoramento(monitoramento).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close')
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = 'none';
        }
      },4000);
    })
  }

}
