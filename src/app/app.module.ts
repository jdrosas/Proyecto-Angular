import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccessComponent } from './components/access/access.component';
import { TomaPedidoComponent } from './components/toma-pedido/toma-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccessComponent,
    TomaPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
