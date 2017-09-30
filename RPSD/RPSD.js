// Great work, Megan.  Your game works well and looks great.
// You have the required named functions and other elements.
// The only issue I found was actually with who wins...  that
// isn't following the requirements all the time.  If I enter 'paper'
// or 'rock' and the computer chooses dynamite, the game says
// 'Rock wins (over dynamite)' and 'Paper wins (over dynamite)'
// which shouldn't be true.  Otherwise, everything is great.
// 9/10


//Global variabless
var gamePieces = ["rock","paper","scissors","dynamite"];
var computerChoice;
var userChoice;
var answer;

//This function creates a local variable and stores the value of the Math.random()* numOfPieces parameter
//rounded down with math.floor. numOfPieces was used instead of getRandomGamePiece.length, so that the number
//of game pieces can easily be changed. "Rock paper scissors lizard spock". Returned is the computerPick
//var with the random computer choice from the aray.
function getRandomGamePiece(numOfPieces){
    // get my random array index
    var computerPick = Math.floor(Math.random() * numOfPieces);
    // return random index back
    return computerPick;
}

//This function prompts the user and sets the userChoice variable to the text input,
//Then it gets a number from the random game pieces function,
//Then a new local variable is created: 'computerIndex', in this vriable the getRandomGamePiece function is called
//and the 'numOfPieces' parameter is set to the length of the gamePieces array
//Then the answer var is set to the 'whoWins' function that compares the userChoice with the computerChoice.
//An if else statement is used to validate the userChoice input and JQuery is used to output the result of the game.
function play(){
  userChoice = prompt("Do you choose rock, paper, scissors or dynamite?");
  var computerIndex = getRandomGamePiece(gamePieces.length);
  computerChoice = gamePieces[computerIndex];
  answer = whoWins(userChoice, computerChoice);

  if(userChoice == ""){
    alert("Invalid choice");
    play();
  }
  else if(gamePieces.indexOf(userChoice) === -1 ){
    alert("Invalid choice");
    play();
  }
  else{
   $(document).ready(function(){
         $('#results').html(" You chose " + userChoice + " the computer chose " + computerChoice + "<br/>" + answer);
   })
  }
}

//this function compares the userChoice with the computerChoice and determines the winner
function whoWins(userChoice, computerChoice){
  if (userChoice===computerChoice){
    return (" The result is a Tie");
  }
  if(userChoice === "rock"){
    if(computerChoice === "scissors"){
      return(' Rock Wins!');
    } else if(computerChoice === "paper"){
      return (' Paper Wins!');
    }else if (computerChoice === "dynamite" ) {
      return (' Rock Wins!')
    }
  }
  if(userChoice ==="paper"){
    if(computerChoice === "rock"){
      return(' Paper Wins!');
    }else if(computerChoice == "scissors"){
      return (' Scissors Wins!');
    }else if (computerChoice == "dynamite") {
      return ('Paper Wins!')
    }
  }
  if(userChoice ==="scissors"){
    if(computerChoice === "paper"){
      return(' Scissors Wins!');
    }else if (computerChoice === "rock"){
      return (' Rock Wins!');
    }else if (computerChoice === "dynamite") {
      return('Scissors Wins!')
    }
  }
  if(userChoice ==="rock"){
    if(computerChoice === "paper"){
      return(' Paper Wins!');
    } else if (computerChoice==="scissors"){
      return (' Rock Wins!');
    }else if (computerChoice === "dynamite") {
      return (' Rock Wins!')
    }
  }
  if(userChoice ==="dynamite"){
    if(computerChoice === "scissors"){
      return(' Scissors Wins!');
    }else{
      return(' Dynamite Wins!');
    }
  }

}
