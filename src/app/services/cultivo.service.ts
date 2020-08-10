import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cultivo} from '../models/Cultivo';
  import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  constructor(private http: HttpClient) { }

  API_URI="http://localhost:8080/terrenos";
  
  getCultivos(){
    return this.http.get(`${this.API_URI}/buscarcultivo`);
  }

  getCultivo(id_cultivo:String){
    return this.http.get(`${this.API_URI}/buscarcultivo/${id_cultivo}`);
  }

  getCultivoId(id_terreno:number){
    return this.http.get(`${this.API_URI}/cultivoterreno/${id_terreno}`);
  }

  saveCultivo(id_terreno:number,cultivo:Cultivo){
    return this.http.post(`${this.API_URI}/terreno/${id_terreno}/cultivo/`,cultivo);
  }

  updateCultivo(id_terreno:number,id:string|number,updateCultivo:Cultivo):Observable<Cultivo>{
    return this.http.put(`${this.API_URI}/terreno/${id_terreno}/cultivo/${id}`,updateCultivo);
  }

  deleteCultivo(id_terreno:number,id:string|number){
    return this.http.delete(`${this.API_URI}/terreno/${id_terreno}/cultivo/${id}`);
  }
}
