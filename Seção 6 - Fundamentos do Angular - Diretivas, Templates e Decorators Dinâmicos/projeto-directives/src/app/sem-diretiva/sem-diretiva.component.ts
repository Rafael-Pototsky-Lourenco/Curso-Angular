import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
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
}
