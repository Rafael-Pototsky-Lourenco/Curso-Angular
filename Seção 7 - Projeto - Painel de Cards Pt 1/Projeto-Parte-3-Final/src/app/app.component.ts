import { Component } from '@angular/core';
import { BalanceCardComponent } from "./components/balance-card/balance-card.component";
import { CreditCardComponent } from "./components/credit-card/credit-card.component";
import { DebitCardComponent } from "./components/debit-card/debit-card.component";
import { InfoCardComponent } from "./components/info-card/info-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BalanceCardComponent, CreditCardComponent, DebitCardComponent, InfoCardComponent]
})
export class AppComponent {
}
