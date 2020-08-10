import { Terreno } from './../models/Terreno';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {TerrenoService} from '../services/terreno.service';
@Component({
  selector: 'app-terreno-form',
  templateUrl: './terreno-form.component.html',
  styleUrls: ['./terreno-form.component.css']
})
export class TerrenoFormComponent implements OnInit {

  constructor(private terrenoService:TerrenoService, private activedRoute:ActivatedRoute,private router:Router) { }
  
  params = this.activedRoute.snapshot.params;
  edit:boolean=false;

  terreno:Terreno={
    id_terreno:0,
    direccion_terreno:'',
    cant_hect:0
  };

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    if(this.params.id){
      this.terrenoService.getTerreno(this.params.id).subscribe(
        res=>{
          this.terreno=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }
  
  saveNewTerreno(){
    delete this.terreno.id_terreno;
    this.terrenoService.saveTerreno(this.params.id_productor,this.terreno).subscribe(
      res=>{
        alert('Datos registrados correctamente');
        this.router.navigate(['/listarterrenos']);
      },
      err=>console.error(err)
    )
  }

  updateTerreno(){
    this.terrenoService.updateTerreno(this.params.id_productor,this.params.id,this.terreno).subscribe(
      res=>{
        alert('Datos modificados correctamente');
        this.router.navigate(['/terreno/productor/'+this.params.id_productor]);
      },
      err=>console.error(err)
    )
  }
}
