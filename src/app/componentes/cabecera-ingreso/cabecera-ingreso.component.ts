import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-ingreso',
  imports: [],
  templateUrl: './cabecera-ingreso.component.html',
  styleUrl: './cabecera-ingreso.component.css'
})
export class CabeceraIngresoComponent {
  constructor(private router: Router) {}
  ingresar() {
    this.router.navigate(['/', 'mi-sii']);
  }
}
