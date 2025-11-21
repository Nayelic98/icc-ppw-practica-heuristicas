import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { EstadoBueno } from './components/estadoBueno/estadoBueno';
import { EstadoMalo } from './components/estadoMalo/estadoMalo';

@Component({
  selector: 'app-estado-sistema02',
  imports: [HeaderHeuristica, EstadoBueno, EstadoMalo],
  templateUrl: './mundo-real.html',
  styleUrl: './mundo-real.css',
  
})
export class EstadoSistema02 { }
