import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  claseTitulo = 'rojo';
  estaMostrando = false;

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloFloresJs = [
    {
      titulo: "Don Jose",
      nombre: "Papitas",
      descripcion:"A lo bestia",
      notas:[
        'Hot Dog', 
        'Hamburguesas',
        'Papitas',
      ]
      // dato:1,
      // dato1:1.1,
      // dato3:" asdasd ",
      // dato4:false,
      // dato5:true,
      // dato6:null
    },
    {
      titulo: "Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:[
        'Papitas',
        'Empanadas',
      ]
    },
    {
      titulo: "Doña Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        'Motes',
        'Fritada',
        'Papitas',
      ]
    }
  ]

  constructor(private readonly _carritoService:CarritoService){
    
  }

  cambioChela(evento:boolean){
    // logica hacerle verde
    console.log('Llego a chela: ', evento);
    this.claseTitulo = 'verde';
  }

  cambioCerveza(evento:boolean){
    // logica hacerle amarillo
    console.log('Llego a cerveza: ', evento);
    this.claseTitulo = 'amarillo';
  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }



}

class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}


