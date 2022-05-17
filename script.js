let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
let suits = [' of Clubs', ' of Diamonds', ' of Spades', ' of Hearts']
let card;
let deck = [];

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



let initialScore;

function initialHand() {

  let card = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();
  getScore(card);
  let card2 = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();
  getScore(card2);

  let scoreCard;
  let scoreCard2;

  if (card[0] == 'A' && card2[0] == 'A') {
    scoreCard2 = 1;
  } else {
    scoreCard2 = getScore(card2)
    scoreCard = getScore(card);
  }

  initialScore = scoreCard + scoreCard2;


  if (initialScore === 21) {
    alert(`You've been dealt ${card} and ${card2}. \nBlackjack! You win!🎇`)
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else {
    alert(`You've been dealt ${card} and ${card2}. \nYour score is ${initialScore}`);
  }





  let hitMe = prompt(`Score: ${initialScore}. \nType hit for another card, or hold to stay`);

  let scoreCard3;
  let card3;

  if (hitMe === 'hit') {
    card3 = hitAgain();
    if (card3[0] == 'A' && initialScore > 10) {
      scoreCard3 = 1;
    } else if (card3[0] == 'A') {
      scoreCard3 = 11;
    } else if ((card[0] == 'A' || card2[0] == 'A') && (Math.abs(getScore(card3)) + initialScore) > 21) {
      initialScore -= 10; // changing ace to a 1 
      scoreCard3 = Math.abs(getScore(card3));
    } else {
      scoreCard3 = Math.abs(getScore(card3));
    }
  } else {
    alert(`Game over! Score: ${initialScore}`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  }






  let updatedScore;
  updatedScore = scoreCard3 + initialScore
  let card4;
  let scoreCard4;

  if (updatedScore < 21) {
    hitTwice = prompt(`You drew a ${card3}, and your score is now ${updatedScore}. \nType hit for another card, or hold to stay`);

    if (hitTwice == 'hit') {
      card4 = hitAgain();
      if (card4[0] == 'A' && updatedScore > 10) {
        scoreCard4 = 1
      } else {
        scoreCard4 = Math.abs(getScore(card4));
      }
    } else {
      alert(`Game over! Score: ${updatedScore}.`);
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    }
  } else if (updatedScore === 21) {
    alert(`You drew a ${card3}. \nBlackjack! You win!🎇`)
    playAgain();
  } else if (updatedScore > 21) {
    alert(`You drew a ${card3}. \n🚩Bust!🚩 You lose!`)
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  }

  updatedScore += scoreCard4;
  let card5;
  let scoreCard5;

  if (updatedScore < 21) {
    hitThrice = prompt(`You drew a ${card4}, and your score is now ${updatedScore}. \nType hit for another card, or hold to stay`);

    if (hitThrice == 'hit') {
      card5 = hitAgain();
      console.log(card5);
      if (card5[0] == 'A' && updatedScore > 10) {
        scoreCard5 = 1;
      } else if (card5[0] == 'A') {
        scoreCard5 = 11;
      } else if ((card[0] == 'A' || card2[0] == 'A' || card3[0] == 'A') && (Math.abs(getScore(card5)) + updatedScore) > 21) {
        updatedScore -= 10 // changing ace to a 1
        scoreCard5 = Math.abs(getScore(card5));
      } else {
        scoreCard5 = getScore(card5);
      }
      updatedScore += scoreCard5
    } else {
      alert(`Game over! Score: ${updatedScore}.`);
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    }
  } else if (updatedScore === 21) {
    alert(`You drew a ${card4}. \nBlackjack! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (updatedScore > 21) {
    alert(`You drew a ${card4}. \n🚩Bust!🚩 You lose!`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }

  }

  if (updatedScore === 21) {
    alert(`You drew a ${card5}. \nBlackjack! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (updatedScore < 21) {
    alert(`You drew a ${card5}. 5 Card Charlie! You win!🎇`);
    playAgain();
    if (playAgain !== 'yes') {
      return;
    }
  } else if (updatedScore > 21) {
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
  }
}


