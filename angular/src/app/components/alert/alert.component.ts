import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .alert {
      padding: 15px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .alert-danger {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
    }
  `]
  })
export class AlertComponent {
  //@Input() message: { title: string, details: string[] } | null = null;
  @Input() message: { title: string, details: string[] } | null = null;
  // Evento para fechar o alerta
  @Output() close = new EventEmitter<void>(); 

  // Método chamado quando o botão de fechar é clicado
  onClose(): void {
    this.close.emit();
  }  
}
