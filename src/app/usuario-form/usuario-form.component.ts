import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { Usuario } from '../models/Usuario';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})


export class UsuarioFormComponent implements OnInit {

  usuario:Usuario={
    username:'',
    password:'',
    id_rol:2
  };
  
  edit:boolean=false;

  user:Usuario={
    username:'as',
    password:'',
    id_rol:2
  };

  constructor(private usuarioService:UsuarioService,private activedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    const params=this.activedRoute.snapshot.params;
    if(params.username){
      this.usuarioService.getUsuario(params.username).subscribe(
        res=>{
          this.usuario=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
    
  }
  cerrar(){
    let token=sessionStorage.getItem("token");
    sessionStorage.removeItem("token")
    this.router.navigate(['/']);
  }
  guardado(){
    console.log(this.user.username);
    console.log(this.usuario.username);
    if(this.usuario.username!=this.user.username){
      this.usuarioService.saveUsuario(this.usuario,this.usuario.id_rol).subscribe(
        res=>{
          alert('Datos registrados correctamente');
          console.log(res);
        },
        err=>{
          console.error(err);
          console.log(this.user.username);
        }
      );
      }else{
        alert('El usuario ya existe');
      }
  }

  saveNewUsuario(){
    this.usuarioService.getUsuario(this.usuario.username).subscribe(
      res => {
        this.user=res;
        console.log(this.user);
        this.guardado();
      },
      err => {
        this.guardado();
        console.error(err);
      }
    )
    
  }

  updateUsuario(){
    this.usuarioService.updateUsuario(this.usuario.username,this.usuario).subscribe(
      res=>{
        alert('Datos modificados correctamente');
        console.log(res);
      },
      err=>console.error(err)
    );
  }
  
}
