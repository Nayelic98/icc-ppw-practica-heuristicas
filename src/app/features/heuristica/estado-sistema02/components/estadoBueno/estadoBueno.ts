import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderHeuristica } from "../../../components/header-heuristica/header-heuristica";
import { EstadoMalo } from '../estadoMalo/estadoMalo';

@Component({
  selector: 'app-estado-bueno',
  imports: [],
  templateUrl: './estadoBueno.html',
  styleUrl: './estadoBueno.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoBueno {
  lastOperation = signal('');

  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }
 }
