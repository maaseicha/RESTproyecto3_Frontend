import { Router } from '@angular/router';
import { CultivoService } from './../services/cultivo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultivos',
  templateUrl: './cultivos.component.html',
  styleUrls: ['./cultivos.component.css']
})
export class CultivosComponent implements OnInit {

  constructor(private cultivoService:CultivoService,private router:Router) { }
  cultivos:any;

  ngOnInit(): void {
    let token=sessionStorage.getItem("token")
    if(token==undefined)
      this.router.navigate(['/']);
    this.cultivoService.getCultivos().subscribe(
      res=>this.cultivos=res,
      err=>console.error(err)
    )
  }

}
