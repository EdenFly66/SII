import { Component } from '@angular/core';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { PieComponent } from "../pie/pie.component";
import { CabeceraIngresoComponent } from "../cabecera-ingreso/cabecera-ingreso.component";

@Component({
  selector: 'app-inicio',
  imports: [CabeceraComponent, PieComponent, CabeceraIngresoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
