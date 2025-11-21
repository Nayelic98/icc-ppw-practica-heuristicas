import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-errores-recuperacion',
  imports: [HeaderHeuristica,HeuristicaBueno,HeuristicaMalo],
  templateUrl: './errores-recuperacion.html',
  styleUrl: './errores-recuperacion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErroresRecuperacion { }
