import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../services/producto.service";
import {Producto} from "../models/producto";

@Component({
  selector: 'Addproducto',
  templateUrl: '../views/producto-add.html',
})
export class ProductoAddComponent implements OnInit {
  public titulo:String;
  public producto:Producto;

  constructor() {
    this.titulo="Crear un nuevo Producto";
    this.producto= new Producto(0,'','',0,'');
  }

  ngOnInit() {
    console.log('se ha cargado la home...');
  }

}
