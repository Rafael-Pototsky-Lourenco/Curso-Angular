import { Component } from '@angular/core';

interface IPlano
{
  infos: IInfos;
}

interface IInfos
{
  tipo: string;
  valor: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // Esse TS-ignore é uma gambiarra para não dar erro de compilação.
  // @ts-ignore
  plano: any = 
  {
    infos: 
    {
      tipo: 'Simples',
      valor: 100,
    }
  };
}
