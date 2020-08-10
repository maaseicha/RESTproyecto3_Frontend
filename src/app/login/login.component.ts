import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private routerLink:Router) { }
  user:Usuario={
    username:'',
    password:'',
    id_rol:2
  }

  user2:Usuario={
    username:'',
    password:'',
    id_rol:2
  }
  ngOnInit(): void {
    
  }
  token:any;
  ver(){
    
    this.usuarioService.getUsuario(this.user.username).subscribe(
      res=>{
        
        this.user2=res;
        if(this.user.username==this.user2.username && this.user.password==this.user2.password){
          alert('Datos exitosos!!');
          this.usuarioService.setToken(this.user2.username);
          this.token = sessionStorage.setItem('token',this.user2.username);
          this.routerLink.navigate(['/productor']);
        }else{
          alert('la contraseña no es la correcta');
        }
      },
      err=>{
        alert('Usuario no encontrado');
        console.error(err)
      }
    )

  }
}
