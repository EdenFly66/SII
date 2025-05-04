import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MiSiiComponent } from './componentes/mi-sii/mi-sii.component';
import { InicioMiSiiComponent } from './componentes/inicio-mi-sii/inicio-mi-sii.component';
import { TramitesComponent } from './componentes/tramites/tramites.component';
import { InicioActividadesComponent } from './componentes/inicio-actividades/inicio-actividades.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'mi-sii', component: MiSiiComponent },
  { path: 'home', component: InicioMiSiiComponent },
  { path: 'tramites', component: TramitesComponent },
  { path: 'actividades', component: InicioActividadesComponent }
];

