import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonitoramentosApiService } from 'src/app/monitoramentos-api.service';

@Component({
  selector: 'app-show-monitoramentos',
  templateUrl: './show-monitoramentos.component.html',
  styleUrls: ['./show-monitoramentos.component.css']
})
export class ShowMonitoramentosComponent implements OnInit {

  monitoramentosList$!:Observable<any[]>;

  constructor(private service:MonitoramentosApiService) { }

  ngOnInit(): void {
    this.monitoramentosList$ = this.service.getMonitoramentosList();
    console.log(this.monitoramentosList$);
  }

 modalTitle:string = '';
 activateAddEditMonitoramentosComponent:boolean = false;
 monitoramento:any;

 modalAdd(){
   this.monitoramento = {
     id:0,
     placa: null,
     data_inicio: null,
     data_termino: null
   }
   this.modalTitle = 'Novo Monitoramento';
   this.activateAddEditMonitoramentosComponent = true;
 }

 modalEdit(item:any){
 this.monitoramento = item;
 this.modalTitle = 'Editar Monitoramento';
 this.activateAddEditMonitoramentosComponent = true;
 }

delete(item:any){
  if(confirm(`Tem certeza que deseja deletar o monitoramento da placa ${item.placa}?`)){

    this.service.deleteMonitoramento(item.id).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close')
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = 'none';
        }
      },4000);
    })
  }
}

 modalClose(){
   this.activateAddEditMonitoramentosComponent = false;
   this.monitoramentosList$ = this.service.getMonitoramentosList();
 }

}
