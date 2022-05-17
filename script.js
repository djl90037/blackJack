let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
let suits = [' of Clubs', ' of Diamonds', ' of Spades', ' of Hearts']
let deck = [];
let card;
let card2;
let scoreCard;
let scoreCard2;

function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      let card = [
        values[j] + suits[i]
      ];
      deck.push(card);
    }
  }
  return deck;
};

function hitAgain() {
  let card = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();
  return card;
}

function getScore(card) {
  if (card.charAt(0) === 'A') {
    score = 11;
  } else if (card.charAt(0) <= 9 && card.charAt(0) != 1) {
    score = Math.abs(card.charAt(0));
  } else {
    score = 10;
  }
  return score;
}

function initialHand() {
  card = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();
  card2 = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();

  scoreCard = getScore(card);
  scoreCard2 = getScore(card2);

  let hand = new Array();
  hand.push(scoreCard);
  hand.push(scoreCard2);


  function calcScore() {
    let updatedScore = 0;
    for (let i = 0; i < hand.length; i++) {
      updatedScore += hand[i];
    }
    for (let j = 0; j < hand.length; j++) { // looping back over the hand
      if (hand[j] === 11 && updatedScore > 21) { // and checking to see any presence of Aces that could bust the hand
        updatedScore -= 10; // changing their value to 1 if true
      }
    }
    return updatedScore
  }

  calcScore();

  if (calcScore() === 21) {
    alert(`You've been dealt ${card} and ${card2}. \nBlackjack! You win!🎇`)
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else {
    alert(`You've been dealt ${card} and ${card2}. \nYour score is ${calcScore()}`);
  }

  let hitMe = prompt(`Score: ${calcScore()}. \nType hit for another card, or hold to stay`);

  let scoreCard3;
  let card3;

  if (hitMe === 'hit') {
    card3 = hitAgain();
    scoreCard3 = getScore(card3)
    hand.push(scoreCard3);
    calcScore();
  } else {
    alert(`Game over! Score: ${calcScore()}`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  }


  let card4;
  let scoreCard4;

  if (calcScore() < 21) {
    hitTwice = prompt(`You drew a ${card3}, and your score is now ${calcScore()}. \nType hit for another card, or hold to stay`);

    if (hitTwice == 'hit') {
      card4 = hitAgain();
      scoreCard4 = getScore(card4);
      hand.push(scoreCard4);
      calcScore();
    } else {
      alert(`Game over! Score: ${calcScore()}.`);
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    }
  } else if (calcScore() === 21) {
    alert(`You drew a ${card3}. \nBlackjack! You win!🎇`)
    playAgain();
  } else if (calcScore() > 21) {
    alert(`You drew a ${card3}. \n🚩Bust!🚩 You lose!`)
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  }


  let card5;
  let scoreCard5;

  if (calcScore() < 21) {
    hitThrice = prompt(`You drew a ${card4}, and your score is now ${calcScore()}. \nType hit for another card, or hold to stay`);

    if (hitThrice == 'hit') {
      card5 = hitAgain();
      scoreCard5 = getScore(card5);
      hand.push(scoreCard5);
      calcScore();
    } else {
      alert(`Game over! Score: ${calcScore()}.`);
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    }
  } else if (calcScore() === 21) {
    alert(`You drew a ${card4}. \nBlackjack! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (calcScore() > 21) {
    alert(`You drew a ${card4}. \n🚩Bust!🚩 You lose!`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }

  }

  if (calcScore() === 21) {
    alert(`You drew a ${card5}. \nBlackjack! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (calcScore() < 21) {
    alert(`You drew a ${card5}. 5 Card Charlie! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (calcScore() > 21) {
    alert(`You drew a ${card4}. \n🚩Bust!🚩 You lose!`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  }



}

createDeck()
alert(`♥🃏♠ Welcome to Blackjack! ♣🃏♦`)
initialHand();

function playAgain() {
  input = prompt(`Would you like to play again? Please enter yes or no`)
  if (input == 'yes') {
    initialHand();
  } else {
    alert(`Bye!`);
    return;
  }
}


