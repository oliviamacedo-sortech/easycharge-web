import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './components/cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { DividaModule } from './components/divida/divida.module';





@NgModule({
  declarations: [
    AppComponent

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
