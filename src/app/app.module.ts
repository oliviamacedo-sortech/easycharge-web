import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { DividaModule } from './divida/divida.module';
import { ListaCobrancaComponent } from './cobranca/lista-cobranca/lista-cobranca.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaCobrancaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    DividaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
