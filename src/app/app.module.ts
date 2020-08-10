import { TerrenoService } from './services/terreno.service';
import { TelefonoService } from './services/telefono.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//permite enlazar los datos del form
import{FormsModule} from '@angular/forms';
//para funcionar nuestro servicio
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductorComponent } from './productor/productor.component';
import { ProductorListComponent } from './productor-list/productor-list.component';
import {ProductorService} from './services/productor.service';
import {CultivoService} from './services/cultivo.service';
import {UsuarioService} from './services/usuario.service';
import { CultivoFormComponent } from './cultivo-form/cultivo-form.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerrenoListComponent } from './terreno-list/terreno-list.component';
import { TerrenoFormComponent } from './terreno-form/terreno-form.component';
import { VerTerrenoComponent } from './ver-terreno/ver-terreno.component';
import { TerrenosComponent } from './terrenos/terrenos.component';
import { CultivosComponent } from './cultivos/cultivos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductorComponent,
    ProductorListComponent,
    CultivoFormComponent,
    UsuarioFormComponent,
    LoginComponent,
    TerrenoListComponent,
    TerrenoFormComponent,
    VerTerrenoComponent,
    TerrenosComponent,
    CultivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductorService,
    CultivoService,
    UsuarioService,
    LoginComponent,
    CookieService,
    TelefonoService,
    TerrenoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
