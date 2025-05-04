import { Component, OnInit } from '@angular/core';
import { CabeceraCierreComponent } from '../cabecera-cierre/cabecera-cierre.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LateralComponent } from "../lateral/lateral.component";
import { CasaSiiComponent } from "../casa-sii/casa-sii.component";
import { DatosPersonalesComponent } from "../datos-personales/datos-personales.component";
import { TramitesComponent } from "../tramites/tramites.component";
import { SolicitudesComponent } from "../solicitudes/solicitudes.component";
import { ExpendienteElectronicoComponent } from "../expendiente-electronico/expendiente-electronico.component";
import { InformaComponent } from "../informa/informa.component";
import { InicioActividadesComponent } from "../inicio-actividades/inicio-actividades.component";
import { PieComponent } from "../pie/pie.component";

@Component({
  selector: 'app-inicio-mi-sii',
  imports: [CabeceraCierreComponent, LateralComponent, FormsModule, CommonModule, CasaSiiComponent, DatosPersonalesComponent, TramitesComponent, SolicitudesComponent, ExpendienteElectronicoComponent, InformaComponent, InicioActividadesComponent, PieComponent],
  templateUrl: './inicio-mi-sii.component.html',
  styleUrl: './inicio-mi-sii.component.css',
})
export class InicioMiSiiComponent implements OnInit{
  contenido = 'inicio';

  ngOnInit() {
    const valorGuardado = localStorage.getItem('contenido');
    if (valorGuardado !== null) {
      this.contenido = valorGuardado;
    }
  }

  actualizarContenido(dato: string) {
    this.contenido = dato;
    localStorage.setItem('contenido', dato);
  }
}
