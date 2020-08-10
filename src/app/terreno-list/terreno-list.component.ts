import { Router } from '@angular/router';
import { Productor } from './../models/Productor';
import { Component, OnInit } from '@angular/core';
import {ProductorService} from './../services/productor.service'

@Component({
  selector: 'app-terreno-list',
  templateUrl: './terreno-list.component.html',
  styleUrls: ['./terreno-list.component.css']
})
export class TerrenoListComponent implements OnInit {
  productores:any;
  productor:Productor={
    id_productor:0,
    cedula:''
  }
  constructor(private productorService:ProductorService, private router:Router) { }

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
  }
   
  buscarCedula(){
    this.productorService.getProductorCed(this.productor.cedula).subscribe(
      res=>{
        this.productores=res;
      },
      err=>console.error(err)
    )
  }
}
