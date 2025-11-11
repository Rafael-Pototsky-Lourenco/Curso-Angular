import { Component } from '@angular/core';
import { CardItem } from "./components/card-item/card-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CardItem]
})
export class AppComponent {
  title = 'Projeto-Parte-3-Final';
}
