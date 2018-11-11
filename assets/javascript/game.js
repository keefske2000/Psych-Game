

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var guessed = []
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoices = letters[Math.floor(Math.random() * letters.length)];
  console.log(`Your guess was ${userGuess} and the computers was ${computerChoices}`)
  if (userGuess === computerChoices) {
    ++Wins
   guessed.push(userGuess)
  }else{
    --GuessesLeft
  }

  if(GuessesLeft === 0){
    Losses++
    GuessesLeft=5;
    guessed = [];
  }
    // Reworked our code from last step to use "else if" instead of lots of if statements.
    

    directionsText.textContent = "";

      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "Wins:" + Wins;
      computerChoiceText.textContent = "Losses:" + Losses;
      winsText.textContent = "Guesses Left:" + GuessesLeft;
      lossesText.textContent = "Your Guesses So far: " + userGuess;  
}