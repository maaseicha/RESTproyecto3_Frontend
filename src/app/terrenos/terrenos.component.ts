import { Router } from '@angular/router';
import { TerrenoService } from './../services/terreno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terrenos',
  templateUrl: './terrenos.component.html',
  styleUrls: ['./terrenos.component.css']
})
export class TerrenosComponent implements OnInit {

  constructor(private terrenoService:TerrenoService,private router:Router) { }

  terrenos:any;

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    this.terrenoService.getTerrenos().subscribe(
      res=>this.terrenos=res,
      err=>console.error(err)
    )
  }

}
