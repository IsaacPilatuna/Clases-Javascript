import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  archivo: File;

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService,
              private readonly _productoHttpService: ProductoHttpService,
              private readonly _productoUsuarioHttpService: ProductoUsuarioHttpService){

  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
      .crear({
        nombre:"Felipe",
        apellido:"Caicedo",
        cedula:'1718137159',
        correo:'eadepto@hotmail.com',
        estaCasado: false,
        username:'adrianeguez',
        sueldo: 120,
        tipoUsuario: 'normal'
      });

      

    usuarioCrear$
      .subscribe(
        (nuevoUsuario)=>{
          console.log(nuevoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );

      const productoCrear$ = this._productoHttpService
      .crear({
        nombre:"Lavadora",
        codigo:"2547"
      });

    productoCrear$
      .subscribe(
        (nuevoProducto)=>{
          console.log(nuevoProducto);
        },
        (error)=>{
          console.error(error);
        },
      );

      const productoUsuarioCrear$ = this._productoUsuarioHttpService
      .crear({
        cantidad: 25,
        fkUsuario:1,
        fkProducto:1
      });
      productoUsuarioCrear$
      .subscribe(
        (nuevoProductoUsuario)=>{
          console.log(nuevoProductoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );

    const url = environment.url + "/Usuario";
    
    // http://localhost:1337/Usuario

    const listaUsuarios$ = this._httpClient.get(url);

    listaUsuarios$
          .subscribe(
            (datos)=>{
              console.log(datos);
            },
            (error)=>{
              console.log(error);
            }
          )
  }

  seleccionarArchivo(evento){
    const listaArchivos: FileList = 
                    evento.target.files;
    const validaciones = {
      existeArchivo: listaArchivos.length > 0
    }
    if(validaciones.existeArchivo){
      const archivo = listaArchivos[0];
      console.log(archivo);
      this.archivo = archivo;
    }

  }

  enviarArchivo(){
    const producto$ = this._productoHttpService
                          .cargarArchivo(
                            this.archivo,1);
    producto$
      .subscribe(
        (datos)=>{
          console.log(datos);
        },
        (error)=>{
          console.error(error);
        }
      );
  }




}
