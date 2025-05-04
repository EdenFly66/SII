import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-cierre',
  imports: [],
  templateUrl: './cabecera-cierre.component.html',
  styleUrl: './cabecera-cierre.component.css'
})
export class CabeceraCierreComponent {
  constructor(private router: Router) {}
  salir() {
    this.router.navigate(['']);
  }
}
