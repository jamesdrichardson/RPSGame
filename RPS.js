rps()

//computer choice
function computerPlay(){
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[getRandomInt(3)]
    console.log("The computer chose " + computerChoice)
    return computerChoice
    }

// random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
    }

//User choice
function userPlay() {
  let userChoice = prompt("What would you like to choose? Rock, Paper, or Scissors.").toLocaleLowerCase();
    
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    console.log('You chose ' + `${userChoice}`);
  }
  
  else {
    console.log('Try again, and learn to read. You only get one more chance');
    userChoice = prompt("What would you like to choose? Rock, Paper, or Scissors").toLocaleLowerCase();
    console.log('You chose ' + `${userChoice}`);
  }
    return userChoice;
  }
  
//GamePlay
function gameplay(userChoice,computerChoice){
  console.log(".");
  console.log("..");
  console.log("...");

  let roundWinner = ""

  let playerScore = 0;
  let compScore = 0;
  

  let youWin = "Congratulations! You win!" ;
  let compWin = "You lose, haha, try again.";
  
  
  // you put in rock && computer puts in scissors you win
  
if ( userChoice === "rock" && computerChoice === "scissors"){
  roundWinner= youWin;
  }
  // if you put in paper && cmputer puts in rock you win
  else if ( userChoice === 'paper' && computerChoice === 'rock'){
  roundWinner= youWin;
  }
  // if you put in scissors && computer puts in paper you win
  else if ( userChoice === "scissors" && computerChoice === "paper"){
  roundWinner= youWin;
  }
  // if user == computer its a tie
  else if (userChoice === computerChoice) {
  roundWinner=  'It\'s a tie!';
  }
  //else computer wins
  else {
  roundWinner= compWin;
  }

  return roundWinner;
}

function rps(){
  let Winner = '';
  let playerPoints = 0;
  let compPoints = 0;
  let playerTurn = "";
  let compTurn = "";
  let howManyRounds = parseInt(prompt("How many rounds are you looking to play?"));

  for (i=0; i< howManyRounds; i++){
    playerTurn = userPlay();
    compTurn = computerPlay();
    Winner = gameplay(playerTurn,compTurn);

    if (Winner.includes("win")){
      playerPoints+=1;
      console.log(Winner + " The score is: " + playerPoints + " to " + compPoints);
    } else if(Winner.includes("lose")){
      compPoints+=1;
      console.log(Winner + " The score is: " + playerPoints + " to " + compPoints);
    } else{
      i-=1;
      console.log(Winner + " The score is: " + playerPoints + " to " + compPoints);
    }
  }
  if (playerPoints > compPoints) {
    console.log("You won the game! " + playerPoints + " to " + compPoints + "!");
  } else {
      console.log("You lost the game! " + compPoints + " to " + playerPoints + "!");
    }

}


