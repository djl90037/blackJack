let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
let suits = [' of Clubs', ' of Diamonds', ' of Spades', ' of Hearts']
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

function drawCard() {
  let card = deck.splice(Math.floor(Math.random() * deck.length), 1).toString();
  hand.push(card);
  let score = 0;
  if (card.charAt(0) === 'A') {
    score = 11;
  } else if (card.charAt(0) <= 9 && card.charAt(0) != 1) {
    score = Math.abs(card.charAt(0));
  } else {
    score = 10;
  }
  handValue.push(score)
  return hand, handValue;
}

let hand = []; // array of cards
let handValue = []; // array of scores for every card in hand

function playerHand() {
  drawCard();
  drawCard();
  function calcScore() {
    let updatedScore = 0;
    for (let i = 0; i < handValue.length; i++) {
      updatedScore += handValue[i];
    }
    for (let j = 0; j < handValue.length; j++) { // looping back over the scores in hand
      if (handValue[j] === 11 && updatedScore > 21) { // and checking to see any presence of Aces that could bust the hand
        updatedScore -= 10; // changing their value to 1 if true
      }
    }
    if (updatedScore < 21) {
      alert(`Your hand is ${hand.join(', ')}. \nYour score is ${updatedScore}`);
      let hitMe = prompt(`Score: ${updatedScore}. Type hit for another card or hold to stay`);
      if (hitMe === 'hit') {
        drawCard();
        calcScore();
      } else {
        alert(`Game Over! Score: ${updatedScore}.`);
        playAgain();
        if (playAgain !== 'yes') {
          return;
        }
      }
    } else if (updatedScore === 21) {
      alert(`You've been dealt ${hand.join(', ')}. \nBlackjack! You win!🎇`)
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    } else if (updatedScore > 21) {
      alert(`Your hand is ${hand.join(', ')}. \nScore: ${updatedScore}. 🚩Bust!🚩 You lose!`)
      playAgain();
      if (playAgain !== 'yes') {
        return;
      }
    }
  }
  calcScore();
}

function playGame() {
  createDeck()
  handValue = [];
  hand = [];
  alert(`♥🃏♠ Welcome to Blackjack! ♣🃏♦`)
  playerHand();
}

function playAgain() {
  input = prompt(`Would you like to play again? Please enter yes or no`)
  if (input == 'yes') {
    playGame();
  } else {
    alert(`Bye!`);
    return;
  }
}

playGame()