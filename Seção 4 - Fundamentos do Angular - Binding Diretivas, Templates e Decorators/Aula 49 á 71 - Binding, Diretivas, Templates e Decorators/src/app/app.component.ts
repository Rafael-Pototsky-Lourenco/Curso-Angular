import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'AULA_BINDING_TEMPLATES_DECORATORS';
  // inputText = 'Texto inicial Alterado!';
  // inputType = 'text';
  // isDisabled = true;

  // enableInput()
  // {
  //   this.isDisabled = false;
  // }

  // disableInput()
  // {
  //   this.isDisabled = true;
  // }

  // setPasswordTypeInput()
  // {
  //   this.inputType = 'password';
  // }

  // setTextTypeInput()
  // {
  //   this.inputType = 'text';
  // }

  // logInputText()
  // {
  //   console.log(this.inputText);
  // }

  // handleInputKeyup(event: KeyboardEvent)
  // {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  // handleInputEvent(event: Event)
  // {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  // buttonTitle = "Mas qui butão de trem sô";
  // buttonDisabled = true;

  // onButtonClick()
  // {
  //   this.buttonTitle = "Butão alteradu";
  //   this.buttonDisabled = !this.buttonDisabled;
  // }

  // widthButton1 = '110px';
  // widthButton2 = 130;
  // styleObj =
  // {
  //   width: '160px',
  //   backgroundColor: 'grey',
  // };

  // updateStyleObj()
  // {
  //   console.log('updateStyleObj');

  //   this.styleObj.width = '170px';
  //   this.styleObj.backgroundColor = 'lightblue';
  // }

  // updateStyleObjCorrect()
  // {
  //   console.log('updateStyleObjCorrect');

  //   this.styleObj = {
  //     width: '180px',
  //     backgroundColor: 'lightgreen',
  //   };
  // };

  // updateWidth()
  // {
  //   this.widthButton2 += 10;
  // }

  isRedButton = true;
  isGreen = true;
}