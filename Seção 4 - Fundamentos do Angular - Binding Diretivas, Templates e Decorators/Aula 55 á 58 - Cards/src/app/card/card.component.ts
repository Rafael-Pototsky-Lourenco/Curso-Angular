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
  // encapsulation: ViewEncapsulation.None,
  // Tive que Comentar o encapsulation do ShadowDow pq ele tava quebrando na hora de declarar uma estilização global (por algum motivo).
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  // Esse TS-ignore é uma gambiarra para não dar erro de compilação. E sim tem que usar com comentário.
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
