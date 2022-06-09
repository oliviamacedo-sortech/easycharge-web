import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaDividaComponent } from './divida/lista-divida/lista-divida.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaDividaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
