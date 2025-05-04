import { Component } from '@angular/core';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { PieComponent } from "../pie/pie.component";
import { CabeceraIngresoComponent } from "../cabecera-ingreso/cabecera-ingreso.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-sii',
  imports: [CabeceraComponent, PieComponent, CabeceraIngresoComponent],
  templateUrl: './mi-sii.component.html',
  styleUrl: './mi-sii.component.css'
})
export class MiSiiComponent {

  constructor(private router: Router) {
  }

  ingresar(){
    this.router.navigate(['/', 'home']);
  }
}
