import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';

@Component({
  selector: 'app-consistencia-estandares',
  imports: [HeaderHeuristica, HeuristicaBueno, HeuristicaMalo],
  templateUrl: './consistencia-estandares.html',
  styleUrl: './consistencia-estandares.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsistenciaEstandares { }
