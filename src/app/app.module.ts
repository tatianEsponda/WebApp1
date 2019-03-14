import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductosComponent } from './components/productos.component';
import { ProductoAddComponent } from './components/producto-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './components/error.component';

//rutas
import {routing,appRoutingProviders} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    ProductoAddComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
