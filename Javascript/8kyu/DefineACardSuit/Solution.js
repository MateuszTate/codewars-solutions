function defineSuit(card) {
    // look only at last index of card variable
    switch (card[card.length-1]) {
        case '♣':
            return 'clubs';
        case '♦':
            return 'diamonds';
        case '♥':
            return 'hearts';
        case '♠':
            return 'spades';
    }
  }

console.log(defineSuit('3♥'));