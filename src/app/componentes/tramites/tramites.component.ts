import { Component, Output, EventEmitter } from '@angular/core';
import { CabeceraCierreComponent } from "../cabecera-cierre/cabecera-cierre.component";
import { PieComponent } from "../pie/pie.component";


@Component({
  selector: 'app-tramites',
  imports: [CabeceraCierreComponent, PieComponent],
  templateUrl: './tramites.component.html',
  styleUrl: './tramites.component.css'
})
export class TramitesComponent {
  @Output() seleccionCambio = new EventEmitter<string>();
  seleccionado: string = 'inicio';
  dirigir(dato: string) {
    this.seleccionado = dato;
    this.seleccionCambio.emit(dato);
  }
}
