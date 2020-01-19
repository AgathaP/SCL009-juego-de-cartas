import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
// cardList : Cards[] = cardList;
mixedCard = [];

  constructor() { 
    // this.generalService.getData().subscribe(Cards => this.mixedCard = Cards);
//this.mixedCard = this.generalService.cardList;
    // console.log(this.mixedCard );
  
    // this.generalService.mixed(cardList)
    // console.log(cardList)
  }

  ngOnInit() {
  // this.generalService.getData();
  }
}
