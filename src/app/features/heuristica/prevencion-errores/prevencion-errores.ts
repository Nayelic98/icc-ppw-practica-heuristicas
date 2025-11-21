import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-prevencion-errores',
  imports:[ HeaderHeuristica,HeuristicaBueno,HeuristicaMalo],
  templateUrl: './prevencion-errores.html',
  styleUrl: './prevencion-errores.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrevencionErrores { }
