import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.html',
})
export class HomeComponent implements OnInit {
public titulo:String;

  constructor() {
    this.titulo='webapp'
  }

  ngOnInit() {
    console.log('se ha cargado la home');
  }

}
