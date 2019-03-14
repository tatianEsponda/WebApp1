import {Component} from "@angular/core";
import {Router,ActivatedRoute,Params} from "@angular/router";
import {ProductoService} from '../services/producto.service';
import {Producto} from "../models/producto";

@Component({
  selector:'productos',
  templateUrl:'../views/productos.html',
  providers:[ProductoService]
})

export class ProductosComponent {
  public titulo: string
  producto: any = [];
  public productos: Producto[];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productoService: ProductoService) {
    this.titulo = 'Nuevo producto';
  }



  /*mapear el resultado
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {

    this.producto = []
    this.producto.getProductos().subscribe((data: {}) => {
        console.log(data);
        this.producto = data;
      }
    )
  }*/
}



