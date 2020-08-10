import { Telefono } from './../models/Telefono';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ProductorService} from '../services/productor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productor-list',
  templateUrl: './productor-list.component.html',
  styleUrls: ['./productor-list.component.css']
})
export class ProductorListComponent implements OnInit {

  productores: any;
  telefonos:any;
  tel:Telefono={
    id_telefono:0,
    telefono:''
  }
  comp:boolean=false;
  prud:number;
  idtel:number;

  constructor(private productorservicio:ProductorService,private routerLink:Router) { }

  ngOnInit(){
    var token=sessionStorage.getItem("token")
    if(token==undefined)
      this.routerLink.navigate(['/']);
    this.recargarPagina();
  }

  recargarPagina(){
    this.productorservicio.getProductores().subscribe(
      res => {
        this.productores=res;
      },
      err => console.error(err)
    );
  }

  cerrar(){
    sessionStorage.removeItem("token")
    this.routerLink.navigate(['/']);
  }
  compro(id_procuctor:number){
    this.prud=id_procuctor;
    this.productorservicio.getTelefonos(id_procuctor).subscribe(
      res=>{
          this.telefonos=res;
      },
      err=>{
        console.error(err)}
    );
  }
  verProductor(id_procuctor:number){
    this.prud=id_procuctor;
  }
  ingresarTelefono(){
    delete this.tel.id_telefono;
    this.productorservicio.saveTelefono(this.prud,this.tel).subscribe(
      res=>{
        console.log(res);
        alert('Telefono registrado correctamente');
      },
      err=>console.error(err)
    )
  }
  verTelefono(id_tel:number){
    this.idtel=id_tel;
  }
  modificarTelefono(){
    this.productorservicio.updateTelefono(this.prud,this.idtel,this.tel).subscribe(
      res=>{
        console.log(res);
        alert('Telefono modificado correctamente');
      },
      err=>console.error(err)
    )
  }
  
  eliminarProductor(idp:number){
    this.productorservicio.deleteProductor(idp).subscribe(
      res=>{
        alert('Productor eliminado correctamente!!');
        this.recargarPagina();
      },
      err=>console.error(err)
    )
  }

  eliminarTelefono(id_tel:number){
    this.productorservicio.deleteTelefono(this.prud,id_tel).subscribe(
      res=>{
        alert('Telefono eliminado correctamente!!')
        this.routerLink.navigate(['/productor']);
      },
      err=>console.error(err)
    )
  }
}
