import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  // Aula 97:
  // constructor(
  //   private _cdRef: ChangeDetectorRef
  // ){}

  // changeDetection()
  // {
  //   this._cdRef.detectChanges();
  // }

  // teste = 'Felipe';

  // Aula 98:
  // clicou(input: HTMLInputElement)
  // {
  //   console.log(input.value);

  //   input.value = 'ZEHAHAHAHA';
  // }
}

const funcaoPai = () =>
{
  let pai = 'pai';

  const funcaoFilho = () =>
  {
    let filho = 'filho';

    pai = 'teste';

    const funcaoNeto = () =>
    {
      filho = 'teste2';
      pai = 'teste';
    }
  }
}