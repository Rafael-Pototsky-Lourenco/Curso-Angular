import { Component } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  createElement(inputText: string)
  {
    console.log(inputText);

    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;
  }
}
