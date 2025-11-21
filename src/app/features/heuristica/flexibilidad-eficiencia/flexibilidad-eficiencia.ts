import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-flexibilidad-eficiencia',
  imports: [HeaderHeuristica,HeuristicaMalo,HeuristicaBueno],
  templateUrl: './flexibilidad-eficiencia.html',
  styleUrl: './flexibilidad-eficiencia.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexibilidadEficiencia { }
