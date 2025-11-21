import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-estado-malo',
  imports: [],
  templateUrl: './estado-malo.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoMalo { 
  lastOperation = signal('');

  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }
}
