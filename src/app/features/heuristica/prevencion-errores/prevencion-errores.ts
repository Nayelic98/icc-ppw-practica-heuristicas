import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';

@Component({
  selector: 'app-prevencion-errores',
  imports:[ HeaderHeuristica,HeuristicaBueno,HeuristicaMalo],
  templateUrl: './prevencion-errores.html',
  styleUrl: './prevencion-errores.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrevencionErrores { }
