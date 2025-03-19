import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _elRef: ElementRef) { }

  ngOnInit() {
    console.log(this._elRef);

    const elDiv = this._elRef.nativeElement.querySelector('#outra-div') as HTMLDivElement;

    elDiv.textContent = 'Sou um outra DIO!';
    elDiv.style.backgroundColor = 'blue';
    elDiv.style.color = 'fuchsia';

    elDiv.addEventListener('click', () => {
      console.log('Clicou na DIO!');
    })

    console.log(elDiv);
  }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'EU SOU UMA DIO!';
    this.divEl.nativeElement.classList.add('minha-classe');
  }

  createElement() {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'sou uma nova DIO!';
  }
}
