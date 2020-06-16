import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuarioHttpService,
    ProductoHttpService,
    ProductoUsuarioHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
