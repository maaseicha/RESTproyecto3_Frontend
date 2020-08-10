import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/Usuario';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient, private cookies: CookieService) { }

  API_URI="http://localhost:8080/usuarios";
  
  getUsuarios(){
    return this.http.get(`${this.API_URI}/buscarusuarios`);
  }

  getUsuario(username:string){
    return this.http.get(`${this.API_URI}/buscarusuario/${username}`);
  }

  saveUsuario(usuario:Usuario,id_rol:string|number){
    return this.http.post(`${this.API_URI}/usuario/${id_rol}`,usuario);
  }

  updateUsuario(username:string,updatedUsurio:Usuario):Observable<Usuario>{
    return this.http.put(`${this.API_URI}/usuario/${username}`,updatedUsurio);
  }

  setToken(token: String|any) {
    this.cookies.set("token",token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
