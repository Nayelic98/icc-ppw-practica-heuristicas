import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';

@Component({
  selector: 'app-reconocimiento-recordar',
  imports: [HeaderHeuristica,HeuristicaMalo,HeuristicaBueno],
  templateUrl: './reconocimiento-recordar.html',
  styleUrl: './reconocimiento-recordar.css',
})
export class ReconocimientoRecordar { }
