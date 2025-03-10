import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// Aula 101
// export class AppComponent implements OnInit, AfterViewInit {
export class AppComponent implements AfterViewInit {
  /*  Aula 99:
  //  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  // @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  // updateInputText()
  // {
  //   this.meuInputEl.nativeElement.value = 'Ah não é o Barba Negra';
  // }

  // focus()
  // {
  //   this.meuInputEl.nativeElement.focus();
  // }

  // updateDivText()
  // {
  //   this.minhaDivEl.nativeElement.textContent = 'ZEHAHAHAHA';
  // }
  */
  /*  Aula 100:
  // Caso tenha apenas um elemento do componente no html, você pode usar o nome da classe como parâmetro ao invés do Template Variable.
  @ViewChild(FilhoComponent) filhoCompRef!: FilhoComponent;

  harou()
  {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'I said TURN, IT, OFF.';
  }
  */
  /* Aula 101:
  @ViewChild('meuInput', { static: true, }) meuInputEl!: ElementRef<HTMLInputElement>;

  constructor()
  {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    this.meuInputEl.nativeElement.focus();
  }*/

  // Aula 102:
  buttonsList = [
    'Botão 1',
    'Botão 2',
    'Botão 3'
  ];

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit()
  {
    // console.log(this.buttonsEl.toArray());
    console.log(this.buttonsEl);

    // const primeiro = this.buttonsEl.toArray()[0];

    // primeiro.nativeElement.style.backgroundColor = 'red';

    this.buttonsEl.changes.subscribe((result) => {
      console.log(result);
    })
  }

  changeColor(event: Event)
  {
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons()
  {
    this.buttonsEl.forEach((btnEl) => {
      console.log(btnEl);
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    })
  }

  first()
  {
    // const primeiro = this.buttonsEl.get(0);

    // const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro);
  }

  remove()
  {
    this.buttonsList.shift();
  }
}
