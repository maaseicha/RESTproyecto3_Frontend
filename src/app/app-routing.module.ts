import { CultivosComponent } from './cultivos/cultivos.component';
import { VerTerrenoComponent } from './ver-terreno/ver-terreno.component';
import { TerrenoListComponent } from './terreno-list/terreno-list.component';
import { TerrenoFormComponent } from './terreno-form/terreno-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProductorComponent}from './productor/productor.component';
import{ProductorListComponent} from './productor-list/productor-list.component';
import {CultivoFormComponent} from './cultivo-form/cultivo-form.component';
import { from } from 'rxjs';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {LoginComponent} from './login/login.component';
import { TerrenosComponent } from './terrenos/terrenos.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'productor',
    component: ProductorListComponent
  },
  {
    path:'productor/buscarproductor',
    component: ProductorComponent
  },
  {
    path:'productor/edit/:id',
    component:ProductorComponent
  },
  {
    path:'cultivo/:id_terreno/add',
    component: CultivoFormComponent
  },
  {
    path: 'cultivo/:id_terreno/edit/:id',
    component: CultivoFormComponent
  },
  {
    path:'terreno/:id_productor/add',
    component: TerrenoFormComponent
  },
  {
    path:'terreno/:id_productor/edit/:id',
    component: TerrenoFormComponent
  },
  {
    path:'usuario/add',
    component: UsuarioFormComponent
  },
  {
    path: 'usuario/edit/:username',
    component: UsuarioFormComponent
  },
  {
    path: 'terreno',
    component: TerrenoListComponent
  },
  {
    path: 'terreno/productor/:id_productor',
    component: VerTerrenoComponent
  },
  {
    path: 'listarterrenos',
    component:TerrenosComponent
  },
  {
    path: 'listarcultivos',
    component: CultivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
