import { ElementRef, Injectable } from "@angular/core";

@Injectable({
     providedIn: 'root',
})
export class TesteService {
     // constructor(private readonly _elRef: ElementRef) { }

     create(elRef: ElementRef) {
          const novaDiv = document.createElement('div');

          novaDiv.textContent = 'você achou que era uma div, mas era eu, DIO!';
          novaDiv.classList.add('bg-red');

          elRef.nativeElement.appendChild(novaDiv);
     }
}