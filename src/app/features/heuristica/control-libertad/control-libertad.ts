import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-control-libertad',
  imports: [HeaderHeuristica,HeuristicaBueno,HeuristicaMalo],
  templateUrl: './control-libertad.html',
  styleUrl: './control-libertad.css',
})
export class ControlLibertad { }
