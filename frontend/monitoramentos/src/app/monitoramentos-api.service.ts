import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentosApiService {

  readonly MonitoramentosApiUrl = 'http://localhost:5000' 
  constructor(private http:HttpClient) { }

  getMonitoramentosList():Observable<any[]>{
    return this.http.get<any>(this.MonitoramentosApiUrl + '/monitoramentos');
  }

  addMonitoramento(data:any){
    return this.http.post(this.MonitoramentosApiUrl + '/create', data);
  }

  updateMonitoramento(data:any){
    return this.http.put(this.MonitoramentosApiUrl + '/update', data);
  }

  deleteMonitoramento(id:number|string){
    return this.http.delete(this.MonitoramentosApiUrl + `/delete/${id}`);
  }

}
