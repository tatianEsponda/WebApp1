import {HttpClient,HttpHeaders,HttpResponse,HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Producto} from "../models/producto";
import {GLOBAL} from "./global";
import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';

import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService{
  public url:String;
  constructor(public _http:HttpClient){
    this.url=GLOBAL.url;
  }
  getProductos(){
    return this._http.get(this.url+'productos/').pipe(map(this.extractData));
  }
  private extractData(res:Response){
    let body= res;
    return body || {};
  }

}
