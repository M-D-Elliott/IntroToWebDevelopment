// -------Form events----------
function clearErrors(form) {
    var formElements = document.forms["lucky-sevens-form"].elements;
    var formElementsLength = formElements.length;
    for (var loopCounter = 0;
        loopCounter < formElementsLength;
        loopCounter++) {
        var element = formElements[loopCounter];
        if (!element.isValid) {
            element.isValid = true;
        }
    }
}

function resetForm() {
    clearErrors();
    var form = document.forms["lucky-sevens-form"];
    form["starting-bet"].value = form["starting-bet"].value > 0
      ? form["starting-bet"].value
      : 1;
    document.getElementById("results").parentElement.style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    form["starting-bet"].focus();
    return false;
}

function validateItems() {
    clearErrors();
    var startingBet = document.forms["lucky-sevens-form"]["starting-bet"];
    var bet = parseInt(startingBet.value);
    var betParent = startingBet.parentElement;
    if (bet === "" || isNaN(bet)) {
        alert("Bet must be a number.");
        startingBet.isValid = false;
        startingBet.focus();
        return false;
    }
    if (bet === 0) {
        alert("You need cash!");
        startingBet.isValid = false;
        startingBet.focus();
        return false;
    } else if (bet < 0) {
      alert("You can't have negative money!");
      startingBet.isValid = false;
      startingBet.focus();
      return false;
    }
    var game = new Game(bet);
   play(game);
   return false;
}


// ---------Game events ------
//Class that contains all the game variables.
class Game {
  constructor(bet) {
    this.bet = this.Money = this.highest = bet;
    this.rolls = this.rollsAtHighest = 0;
  }
}

// Simulates rolling dice, size can be passed in, but this will assume 6-sided if not.
function rollDice(size) {
  if (size === undefined || size === null) {
    size = 6;
  }
  return Math.floor(Math.random() * size) + 1;
}

// Main game loop, references itself until game.money runs dry, then chooses gameOver on the furthest layer.
function play(game) {
  if(game.Money > 0){
    var first = rollDice(6);
    var second = rollDice(6);
    if((first + second) === 7) {
      game.Money += 4;
    } else {
      game.Money -= 1;
    }
    game.rolls++;
    if(game.Money > game.highest) {
      game.highest = game.Money;
      game.rollsAtHighest = game.rolls;
    }
    play(game);
  } else {
    gameOver(game);
  }
}

function gameOver(game) {
  document.getElementById('results').parentElement.style.display = "block";
  document.getElementById('bet-result').innerText = "$" + game.bet;
  document.getElementById('roll-result').innerText = "" + game.rolls;
  document.getElementById('highest-result').innerText = "" + game.highest;
  document.getElementById('total-roll-result').innerText =
    "" + game.rollsAtHighest;
}
