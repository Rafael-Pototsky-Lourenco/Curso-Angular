import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  constructor(
    private _elRef: ElementRef,
    private _renderer2: Renderer2
  ) { }

  createElement(inputText: string)
  {
    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divEl);
  }
}
