import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    // el signo de dolar significa q esa variable
    // es un observable
    const parametrosConsulta$ = this._activatedRoute.queryParams;

    // parametros de ruta y de consulta no necesitan las funciones
    // "Catch" y "Complete" porque son especiales
    parametrosConsulta$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros consulta:', parametrosConsulta);
      }
    )

    parametros$.subscribe(
      (parametros)=>{ // ok  TRY
        console.log('Parametros:', parametros);
      },
      (error)=>{ // :(  CATCH
        console.log('Eror:', error);
      },
      ()=>{ // Completado  // Finally -> OPCIONAL
        console.log('Completo');
      }
    )


  }

}
