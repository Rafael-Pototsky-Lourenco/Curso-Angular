import { Component, Input, numberAttribute, ViewEncapsulation } from '@angular/core';

interface IPlano
{
  infos: IInfos;
}

interface IInfos
{
  tipo: string;
  valor: number;
}

function handlePlanType(value: string)
{
  console.log('handlePlanType', value);
  return value.toUpperCase();
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
  // plano: any = 
  // {
  //   infos: 
  //   {
  //     tipo: 'Simples',
  //     valor: 100,
  //   }
  // };

  // @Input({ required: true, alias: 'planValueAlias', transform: numberAttribute}) planValue: number = 0;
  @Input({ required: true, alias: 'planValueAlias' }) planValue: number = 0;
  @Input({alias: 'planTypeAlias', transform: (value: string) => handlePlanType(value) }) planType: string = '';

  // private _planType: string = '';

  // @Input('planTypeAlias') set planType(value: string)
  // {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string
  // {
  //   return this._planType;
  // }

  buttonClicked(valueEmitted: boolean)
  {
    console.log('Hiper OvO', valueEmitted);
    console.log('planValue', this.planType);
  }
}
