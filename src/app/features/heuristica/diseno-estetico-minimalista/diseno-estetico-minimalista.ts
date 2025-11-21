import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-diseno-estetico-minimalista',
  imports: [HeaderHeuristica,HeuristicaMalo,HeuristicaBueno],
  templateUrl: './diseno-estetico-minimalista.html',
  styleUrl: './diseno-estetico-minimalista.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisenoEsteticoMinimalista { }
