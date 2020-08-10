import { Component, OnInit, HostBinding} from '@angular/core';
import {ProductorService} from '../services/productor.service';
import { Productor } from '../models/Productor';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})

export class ProductorComponent implements OnInit {

  @HostBinding('class') classe='row';
  
  productor: Productor = {
    id_productor:0,
    cedula:'',
    nombre:'',
    apellido:'',
    direccion:'',
    email:''
  };
  
  prod:Productor={
    id_productor:0,
    cedula:'',
    nombre:'',
    apellido:'',
    direccion:'',
    email:''
  }

  edit:boolean=false;
  flag:boolean=false;
  flagc:boolean=true;

  constructor(private productorservices:ProductorService,private router:Router,private activedroute:ActivatedRoute) { }

  ngOnInit(){
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    const params= this.activedroute.snapshot.params;
    if(params.id){
      this.productorservices.getProductor(params.id).subscribe(
        res=>{
          this.productor=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }

  validar() {
    var cad:any = this.productor.cedula;
    var total = 0,i;
    var longitud = cad.length;
    var longcheck = longitud - 1;
  
    if (cad != "" && longitud == 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 == 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total){ 
        this.flag=true;
      }
    }
  }

  SaveNewProductor(){
    delete this.productor.id_productor;
    this.validar();
    if(this.flag){
        this.productorservices.saveProductor(this.productor).subscribe(
          res=>{
            alert('Datos registrados correctamente');
            this.router.navigate(['/productor']);
          },
          err=>alert('Ya existe un productor con la cédula ingresada!')
        )
    }else{
      alert('La cédula es incorrecta');
    }
  }
  
  updateProductor(){
    this.validar();
    if(this.flag){
    this.productorservices.updateProductor(this.productor.id_productor,this.productor).subscribe(
      res=>{
        alert('Datos modificados correctamente');
        this.router.navigate(['/productor']);
      },
      err=>console.error(err)
    )
    }else{
      alert('La cédula es incorrecta');
    }
  }
}
