
   <script src="assets/javascript/game.js"></script>
  
  
  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
   var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
   "t", "u", "v", "w", "x", "y", "Z"];

   // Creating variables to hold the number of wins, losses, and ties. They start at 0.
   var Wins = 0;
   var Losses = 0;
   var GuessesLeft = 10;
   var YourGuessesSofar = 0;

   // Create variables that hold references to the places in the HTML where we want to display things.
   var directionsText = document.getElementById("directions-text");
   var userChoiceText = document.getElementById("Wins");
   var computerChoiceText = document.getElementById("Losses");
   var winsText = document.getElementById("GuessesLeft");
   var lossesText = document.getElementById("YourGuesses");

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