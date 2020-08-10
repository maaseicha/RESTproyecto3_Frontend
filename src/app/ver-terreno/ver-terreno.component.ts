import { CultivoService } from './../services/cultivo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrenoService } from './../services/terreno.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ver-terreno',
  templateUrl: './ver-terreno.component.html',
  styleUrls: ['./ver-terreno.component.css']
})
export class VerTerrenoComponent implements OnInit {
  
  constructor(private cultivosService:CultivoService,private terrenoService:TerrenoService, private activedRoute:ActivatedRoute, private router:Router) { }
  
  params = this.activedRoute.snapshot.params;
  terrenos:any;
  cultivos:any;
  id_terr:number;

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    this.obtenerTerrenos();
  }

  obtenerTerrenos(){
    this.terrenoService.getTerrenosProd(this.params.id_productor).subscribe(
      res=>this.terrenos=res,
      err=>console.error(err)
    )
  }

  modificarTerreno(id_terreno:number){
    this.router.navigate(['/terreno/'+this.params.id_productor+'/edit/'+id_terreno]);
  }

  eliminarTerreno(id_terreno:number){
    this.terrenoService.deleteTerreno(id_terreno).subscribe(
      res=>{
        alert('El terreno fue eliminado correctamente!!');
        this.obtenerTerrenos();
      },
      err=>console.error(err)
    )
  }
  verCultivos(id_terreno:number){
    this.id_terr=id_terreno;
    this.cultivosService.getCultivoId(id_terreno).subscribe(
      res=>this.cultivos=res,
      err=>console.error(err)
    )
  }
  eliminarCultivo(id_cultivo:number){
    this.cultivosService.deleteCultivo(this.id_terr,id_cultivo).subscribe(
      res=>alert('El cultivo ha sido eliminado correctamente!!'),
      err=>console.error(err)
    )
  }
  modificarCultivo(id_cultivo:number){
    this.router.navigate(['/cultivo/'+this.id_terr+'/edit/'+id_cultivo]);
  }
}
