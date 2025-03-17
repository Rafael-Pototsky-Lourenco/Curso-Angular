import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  // Meu Exemplo
  changeBackground(event: Event)
  {
    const target = event.target as HTMLElement;

    target.style.backgroundColor = 'red';
  }

  returnBackground(event: Event)
  {
    const target = event.target as HTMLElement;

    target.style.backgroundColor = '';
  }

  // Exemplo Prof
  addBgColor: boolean = false;

  onMouseOver()
  {
    this.addBgColor = true;
  }

  onMouseOut()
  {
    this.addBgColor = false;
  }
}
