import { Component, OnInit, Input, Output, EventEmitter, OnDestroy,  } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import {ItemCarritoCompras} from '../interfaces/item-carrito-compras';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {

  static title = 'Licoreria';

  @Input()
  titulo; 

  @Input()
  textoBoton;   

  @Input()
  nombreItem;

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()

  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

  @Input()
  notas;

  // Dependency
  // Injection
  // Injeccion de dependencias
  // SERVICIOS -> COMPONENTES
  // SERVICIOS -> SERVICIOS
  constructor(private readonly _carritoService:CarritoService ) { }

  

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    const cervezas = "https://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    const chelas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"
    if(this.url === cervezas){
      this.url = chelas;
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    // var url2 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // let url3 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // this.url = url1;
  }

  ngOnInit() {
    console.log("'Empezo'");
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log('"Termino"');
  }

  agregarCarrito(valorCarrito:string){
    // this._carritoService.carritoCompras.push(itemCarrito);
    const itemCarrito:ItemCarritoCompras = {
      valor: valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra:new Date()
    };
    const respuestaCarrito = this._carritoService
          .agregarCarritoDeCompras(itemCarrito);
    console.log(respuestaCarrito);
    
  }


}


/*
class CarritoCompraClass implements CarritoComprasInterface {
  valor:string;
  nombreTienda:string;
  fechaCompra?:Date;
}
*/


/*
@DecoratorsClase() 
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Adrian';
  constructor(@DecoratorsConstructor() nombre){

  }

  @DecoratorsMetodo()
 metodoPublico(){

 }
 private metodoPrivado(){

 }
 protected metodoProtected(){

 }
}
*/



/*
Ciclo de vida del componente

ngOnInit -> OnInit -> Instancia
ngOnDestroy -> OnDestroy

*/ 

/*
- RUTA -> LOGIN/MODULOS/ETC
  - PAPA []->hijo  []->hija
    - HIJO []->nieto ()->papa
      - NIETO ->()->hijo
  - HIJA
    - NIETA
  - TIO
    - PRIMO
*/


/* - SERVICIO
><
  - PAPA
    - HIJO
      - NIETO
  - HIJA
    - NIETA
  - TIO
    - PRIMO
*/



/*

# -> Modulo
* -> Componente
- -> Servicio

# ModuloPrincial (AppModule)
  *  ComponentePrincipal (AppComponent) 

.........................
# ModuloNotas (NotasModule)
  *  TablaMostrarMateria 
     _ [] notasPorMateria
     _ [] nombreBoton
     _ [] iconoBoton
     _ () ejecutoAccion
  *  listaMaterias
     _ () seleccionoMateria
*/
/*

Problema:
Cuando agrege un item al arreglo, debo
de guardar su cantidad.
En el item nos hace falta, la cantidad.

id -> Valor

1) Verificar si ya existe ese "item"-> valor

  Existe? -> Buscar en el arreglo si existe ese valor   

 1.1 Existe) 
  Aumentamos el contador

 1.2 No existe)
  Creamos el contador y lo seteamos en 1

 boton componente item
 -> input ()  -> output
 C1 ->  
 C2 -> 
 S1 -> 
 S2 -> 










*/ 