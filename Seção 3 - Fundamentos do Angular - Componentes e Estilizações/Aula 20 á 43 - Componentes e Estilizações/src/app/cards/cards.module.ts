import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonRoxoComponent } from '../card-button-roxo/card-button-roxo.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonRoxoComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    //CardButtonComponent,
    //CardButtonRoxoComponent
  ]
})
export class CardsModule { }
