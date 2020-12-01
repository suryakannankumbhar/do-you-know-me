// Imported
var readlineSync = require('readline-sync');
const chalk = require('chalk');



// Declarations
var incorrect = chalk.red.bold;
var correct = chalk.green.bold;
var score = 0;



// Intro
console.log(chalk.blueBright("Welcome To" , chalk.green.bold("'Jaane Tu Ya Jaane Na'"),chalk.blueBright("Quiz")));
console.log(chalk.red("________________________________________________"))
console.log()
var userName = readlineSync.question('May I have your name? ');
console.log(chalk.red('Hi'), userName, ", Hope You're Doing Well!!");

console.log()

// INSTRUCTIONS
console.log(chalk.blueBright.bold.underline("INSTRUCTIONS"))
console.log("1. For every correct answer 5 Points are rewarded.")
console.log("2. No Points will be deducted for an incorrect answer.")
console.log(chalk.bold("3. Enjoy!!"))

console.log()
console.log()

 


// play Function
function play(question,a,b,c,d,answer)
{
  console.log(chalk.blueBright.bold(question))
  console.log(chalk.rgb(238,130,238)("a. "+a));
  console.log(chalk.rgb(238,130,238)("b. "+b));
  console.log(chalk.rgb(238,130,238)("c. "+c));
  console.log(chalk.rgb(238,130,238)("d. "+d));
  var userAnswer = readlineSync.question("Select your answer: ");
  if (userAnswer == answer) 
  {
    console.log(correct("Bingo!! You're Right!!"))
    score=score+5
    console.log()
    
  }

    else{
      console.log(incorrect("Ops!! That was the wrong answer!!"))
      console.log(incorrect("The correct answer is: ")+correct(answer))

    }
    console.log("Your current Score is: ",score)
    console.log()
  }





// Array of Questions
var questions = [{
  question:"1. How old am I?",
  a: "18",
  b: "20",
  c: "21",
  d: "23",
  answer: 'b',
  },

  {
    question: "2. Which sport do I play?",
    a: "Football",
    b: "Cricket",
    c: "Kabbadi",
    d: "Tennis",
    answer: 'a',
  },


  {
    question: "3. Which position do I play in Football?",
    a: "Goalkeeper",
    b: "Defender",
    c: "Striker",
    d: "midfielder",
    answer: 'a',
    
  },



  {
    question: "4. Which is my favorite hero?",
    a: "Superman",
    b: "Ironman",
    c: "Arrow",
    d: "Batman",
    answer: 'd',
  
  },




  {
    question: "5. Which is my favorite movie?",
    a: "The Dark Knight Rises",
    b: "Avengers: Endgame",
    c: "Batman vs Superman",
    d: "Justice League: Apokilis War",
    answer: 'b',
    
  },


  {
    question: "6. Which is my favorite anime?",
    a: "Attack On Titan",
    b: "Code Geass",
    c: "Naruto",
    d: "My Hero Academia",
    answer: 'c',
    
  },



  {
    question: "7. Which is my favorite anime character from Naruto?",
    a: "Naruto Uzumaki",
    b: "Shikamaru Nara",
    c: "Pain",
    d: "Madara Uchiha",
    answer: 'd',
  
  },




  {
    question: "8. Who is my favorite author?",
    a: "Amish Tripathi",
    b: "Robin Sharma",
    c: "Chetan Bhagat",
    d: "Vikram Seth",
    answer: 'a',
    },




  {
    question: "9. Who is my favorite youtuber?",
    a: "Samay Raina",
    b: "Carry Minati",
    c: "Saiman Says",
    d: "Tanmay Bhatt",
    answer: 'd',
  },





  {
    question: "10. Which month was I born in?",
    a: "December",
    b: "June",
    c: "October",
    d: "February",
    answer: 'c',
    
  },


]




for (var i= 0; i< questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.a,currentQuestion.b,currentQuestion.c,currentQuestion.d,currentQuestion.answer,);
  console.log("------------------")
  console.log()
}




var highScores = [
  {
  name:'Surya',
  score:50,
  },
  {
    name:'Suraj',
    score:35,
  }
]



console.log("Current Highscorers are: ")
for(var i = 0; i<highScores.length ; i++) {
   var currentPlayer= highScores[i]
   console.log(currentPlayer.name,":",currentPlayer.score)  
}
console.log()






if (score >= 40){
  console.log(chalk.green.bold("WOW!! That was amazing!!!! You Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}
else if (score >= 25) {
  console.log(chalk.green.bold("WOW!! That was Great!!!! You Scored"),chalk.red.bold(score), chalk.green.bold("Points!! ") )

}
  
else if (score >= 10) {
  console.log(chalk.green.bold("Nice!! You palyed well!!!! You Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}
else{
  
  console.log(chalk.green.bold("Bad Luck!! Give it another Try!! Your Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}

console.log()

if (score> 35) {
  console.log(chalk.red.bold("Conragtulations!! You beat Suraj."))
  console.log(chalk.green.bold("You're into the Leaderboard!!"))
  console.log(chalk.bold("New Highscorers:"))
  console.log(chalk.blueBright.bold("Surya : 50"))
  console.log(chalk.blueBright.bold(userName,':',score))
}

console.log()
console.log()
console.log("***send me a screenshot on twitter if you want me to update your name.")
