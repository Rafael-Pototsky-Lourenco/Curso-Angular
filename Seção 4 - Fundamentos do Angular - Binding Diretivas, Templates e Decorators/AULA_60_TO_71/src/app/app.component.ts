import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AULA_60_TO_71';

  buttonClicked()
  {
    console.log('I wonder why people dont use their strongest attack first');
  }

  onCardButtonClicked()
  {
    console.log('No one can beat me');
    // Chamada HTTP
  }
}
