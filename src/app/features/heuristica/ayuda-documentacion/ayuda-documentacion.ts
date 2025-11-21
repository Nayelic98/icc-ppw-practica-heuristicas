import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristica } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from './components/heuristica-malo/heuristica-malo';
import { HeuristicaBueno } from './components/heuristica-bueno/heuristica-bueno';

@Component({
  selector: 'app-ayuda-documentacion',
  imports: [HeaderHeuristica, HeuristicaMalo, HeuristicaBueno],
  templateUrl: './ayuda-documentacion.html',
  styleUrl: './ayuda-documentacion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AyudaDocumentacion { }
