import { Terreno } from './../models/Terreno';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TerrenoService {
  API_URI='http://localhost:8080/terrenos';

  constructor(private http:HttpClient) { }

  getTerrenos(){
    return this.http.get(`${this.API_URI}/buscarTerrenos`);
  }
  
  getTerreno(id_terreno:number){
    return this.http.get(`${this.API_URI}/buscarTerreno/${id_terreno}`);
  }

  getTerrenosProd(id_productor:number){
    return this.http.get(`${this.API_URI}/terreno/${id_productor}`);
  }

  saveTerreno(id_productor:number,terreno:Terreno){
    return this.http.post(`${this.API_URI}/${id_productor}/terreno`,terreno);
  }
  
  updateTerreno(id_productor:number,id_terreno,terreno:Terreno){
    return this.http.put(`${this.API_URI}/${id_productor}/terreno/${id_terreno}`,terreno);
  }

  deleteTerreno(id_terreno:number){
    return this.http.delete(`${this.API_URI}/eliminarTerreno/${id_terreno}`);
  }
}
