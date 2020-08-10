import { Component, OnInit } from '@angular/core';
import {CultivoService} from '../services/cultivo.service';
import {Cultivo} from '../models/Cultivo';
import {Router,ActivatedRoute} from '@angular/router';
  import { from } from 'rxjs';
@Component({
  selector: 'app-cultivo-form',
  templateUrl: './cultivo-form.component.html',
  styleUrls: ['./cultivo-form.component.css']
})
export class CultivoFormComponent implements OnInit {

  constructor(private cultivoServices:CultivoService,private router:Router,private activetedRouter:ActivatedRoute) { }

  cultivo: Cultivo={
    id_cultivo:0,
    nombre_cult:'',
    detalle_cult:'',
    cant_cult:0,
    fecha_cult: new Date()
  };
  params = this.activetedRouter.snapshot.params;
  edit:boolean=false;

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    
    if(this.params.id){
      this.cultivoServices.getCultivo(this.params.id).subscribe(
        res=>{
          console.log(res);
          this.cultivo=res;
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

  saveNewCultivo(){
    delete this.cultivo.id_cultivo;
    this.cultivoServices.saveCultivo(this.params.id_terreno,this.cultivo).subscribe(
      res=>{
        alert('Datos registrados correctamente');
        this.router.navigate(['/listarcultivos']);
      },
      err=>console.error(err)
    )
  }

  updateCultivo(){
    this.cultivoServices.updateCultivo(this.params.id_terreno,this.cultivo.id_cultivo,this.cultivo).subscribe(
      res=>{
        alert('Datos modificados correctamente');
        this.router.navigate(['/listarcultivos']);
      },
      err=>console.error(err)
    )
  }
}
