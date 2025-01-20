import { Component } from '@angular/core';


@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  // Aqui embaixo as 2 formas de declarar o styles, com o Url (tendo um arquivo scss) e com o styles (tendo o css dentro do arquivo ts).
  // Lembrando que a propriedade do Styles vai sobreescrever a propriedade do StylesUrl.
  styleUrls: ['./card-button-cancel.component.scss'],
  //styleUrls: ['./card-button-cancel.component.scss', './card-button-cancel.component-2.scss'],
  // Como pode ser visto acima, o styleUrls tem 2 declarações de um arquivo scss, porém, qual dos 2 é o que será aplicado? A resposta é simples, será quase sempre o segundo arquivo, sua única exceção é se na declaração do arquivo 1 eu especificar melhor a classe, ele será o aplicado. Porém isso é complicado e não recomendado para iniciantes.
  styles: `
  // Como é um array, eu posso adicionar várias classes na sequência.
`
})
export class CardButtonCancelComponent {

}
