import { Component, OnInit } from '@angular/core';

// Data base
import { cardList } from '../../../data/cardlist';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  mixedCard = cardList;

// Empty array that will contain two cards to compare 
cardsCompare = []
  constructor() { 
    console.log(cardList);
    
  }

  // Flip the card
flipCard(idCard){
  // Flip the card
  console.log(idCard)
  event.target.parentNode.classList.add('flip');
   this.cardsCompare.push(idCard);
   // Take just two clicked card
   if(this.cardsCompare.length === 2){ 
     console.log(this.cardsCompare.length)
     // Here compare the id of the each clicked card
     if(this.cardsCompare[0] === this.cardsCompare[1]){
       console.log('they are the same');
      // adding class hidden
      event.target.parentNode.classList.add('hidden');
     } else {
       // Flip again
      event.target.parentNode.classList.add('flip-again');
     }
     this.cardsCompare = [];
   }
}

  ngOnInit() {

  }
}
