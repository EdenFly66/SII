import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lateral',
  imports: [FormsModule, CommonModule],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css',
})
export class LateralComponent {
  @Output() seleccionCambio = new EventEmitter<string>();
  seleccionado: string = 'inicio';
  dirigir(dato: string) {
    this.seleccionado = dato;
    this.seleccionCambio.emit(dato);
    localStorage.setItem('seleccionado', dato);
  }
  ngOnInit() {
    const valorGuardado = localStorage.getItem('seleccionado');
    if (valorGuardado !== null) {
      this.seleccionado = valorGuardado;
    }
  }

}
