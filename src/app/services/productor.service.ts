import { Telefono } from './../models/Telefono';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Productor} from '../models/Productor';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {
  API_URI='http://localhost:8080/productores';
 
  constructor(private http:HttpClient) { }

  getTelefonos(id_productor:string|number){
    return this.http.get(`${this.API_URI}/productor/telefono/${id_productor}`);
  }
  
  saveTelefono(id_productor:string|number,telefono:Telefono){
    return this.http.post(`${this.API_URI}/productor/${id_productor}/telefono`,telefono);
  }

  updateTelefono(id_productor:string|number,id_telefono:string|number,telefono:Telefono){
    return this.http.put(`${this.API_URI}/productor/${id_productor}/telefono/${id_telefono}`,telefono);
  }

  deleteTelefono(id_productor:string|number,id_telefono:string|number){
    return this.http.delete(`${this.API_URI}/productor/${id_productor}/telefono/${id_telefono}`);
  }

  getTelefono(id_telefono:string|number){
    return this.http.get(`${this.API_URI}/telefono/${id_telefono}`);
  }

  getProductorCed(cedula:string){
    return this.http.get(`${this.API_URI}/buscarproductor/${cedula}`);
  }

  getProductores(){
    return this.http.get(`${this.API_URI}/buscarproductores`);
  }

  getProductor(id_productor:string){
    return this.http.get(`${this.API_URI}/buscarproductorid/${id_productor}`);
  }
  
  deleteProductor(id:string|number){
    return this.http.delete(`${this.API_URI}/productor/${id}`);
  }

  saveProductor(productor:Productor){
    return this.http.post(`${this.API_URI}/productor`,productor);
  }

  updateProductor(id:string|number,updateProductor:Productor): Observable<Productor>{
    return this.http.put(`${this.API_URI}/productor/${id}`,updateProductor);
  }
}
