import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// RESTFUL -> METODOS "="

// CLASE -> Metodos Logica 
// RESTFUL

// Extender esa clase
// Usarla

export class HttpSailsPrincipal<ClaseEntidad>{
    protected url: string = "http://localhost:1337";
    protected modelo: string = "";

    constructor(protected readonly httpClient:HttpClient,
                url:string,
                modelo:string,
                ){
                    this.url = url;
                    this.modelo = modelo;
    }

    crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
                    .post(url, nuevoRegistro)
                    .pipe(
                        map(
                            (datos)=>{
                                return datos as ClaseEntidad;
                        })
                    );
    }

    // Crear

    // Borrar

    // Actualizar

    // BuscarPorId

    // BuscarTodos

}




















