import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { SelectpromoComponent } from './Componentes/Promociones/selectpromo/selectpromo.component';
import { SigueparticipandoComponent } from './Componentes/Promociones/sigueparticipando/sigueparticipando.component';
import { PromoprocessComponent } from './Componentes/Promociones/promoprocess/promoprocess.component';
import { RouterModule, Routes} from '@angular/router';
import { ComidasComponent } from './Componentes/menu/comidas/comidas.component';
import { BebidasComponent } from './Componentes/menu/bebidas/bebidas.component';
import { PostresComponent } from './Componentes/menu/postres/postres.component';
import { MenucomidaComponent } from './Componentes/menu/menucomida/menucomida.component';

const rutas:Routes = [
  {path: '', component:BienvenidoComponent}, //pestaña default
  {path: 'Registro',component:RegistroComponent}, //estas tres lineas le decimos al root a donde nos debe de mandar
  {path: 'login',component:LoginComponent},
  {path: 'Menucomidas', component:ComidasComponent},
  {path: 'Menubebidas', component:BebidasComponent},
  {path: 'Menupostre', component:PostresComponent},
  {path: 'Menudemenu', component:MenucomidaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    NavBarComponent,
    LoginComponent,
    RegistroComponent,
    SelectpromoComponent,
    SigueparticipandoComponent,
    PromoprocessComponent,
    ComidasComponent,
    BebidasComponent,
    PostresComponent,
    MenucomidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(rutas,{useHash:false}) //Importar las rutas para que funciones y para que no se muestre el #
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
