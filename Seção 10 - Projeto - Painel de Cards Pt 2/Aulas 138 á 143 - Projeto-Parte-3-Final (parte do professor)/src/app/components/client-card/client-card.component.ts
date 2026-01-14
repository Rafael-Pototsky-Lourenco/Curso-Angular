import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit{
  headerColor: string = 'cyan';

  ngOnInit() {
    setTimeout(() => {
      this.headerColor = 'wine';
    }, 3000);
  }
}
