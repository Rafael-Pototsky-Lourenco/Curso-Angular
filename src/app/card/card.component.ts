import { Component, ViewEncapsulation } from '@angular/core';

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
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
