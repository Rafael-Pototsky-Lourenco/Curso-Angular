import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aula_20_Criacao_Componente';

  cardPlanType = 'Simples';
  cardPlanValue = 100;

  handlePlanType(text: string)
  {
    this.cardPlanType = text;
  }
}
