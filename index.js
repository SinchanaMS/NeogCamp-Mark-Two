//Harry Potter Quiz

var chalk=require('chalk');
var readlineSync = require('readline-sync')
var score = 0
var userName = readlineSync.question(chalk.blue("Please enter your username: "))

console.log(chalk.red("\nPlease only provide the option as the answer (Eg.: A)"))

function welcome(){
console.log("\nWelcome to the Harry Potter Quiz, ", userName, "!!!")
console.log("\nLet's see if you're a Potterhead, shall we?")
console.log(chalk.bgGray("welcome function has run"))
}

function quizquests(){

var questions=[  {
    question: "How many Harry Potter Books do we have? \nA. 5 \nB. 7 \nC. 8 \nD. 6 \n",
    answer: "B"
  },
  {
    question: "What House did Prof. Severus Snape belong to? \nA. Gryffindor \nB. Hufflepuff \nC. Slytherin \nD. Ravenclaw\n",
    answer: "C"
  },
  {
    question: "Which of the following was NOT a Horcrux? \nA. Rowena Ravenclaw's Diadem \nB. Gryffindor Sword \nC. Harry Potter \nD. Salazar Slytherin's locket\n",
    answer: "B"
  },
  {
    question: "Name Luna Lovergood's father:  \nA. Xenophilius \nB. Lucius \nC. Slughorn \nD. Mundungus\n",
    answer: "A" 
  }
]

for (var i=0; i<questions.length; i++){
quiz(questions[i].question,questions[i].answer)
}
console.log(chalk.bgGray("quizquests function has run"))
}


function quiz(question,answer){
  var userAnswer=readlineSync.question(question)
    if (userAnswer===answer){
    console.log(chalk.green("Hooray! Right answer!!!"))
    score++
  }else{
    console.log(chalk.red("Uh-oh! Wrong answer!"))
  }
    console.log("Your current score is: ", score, "\n")
    console.log(chalk.bgGray("quiz function has run\n\n"))
}

function finalscore(){
  console.log("\nYour final score is: ", score)
  if (score<=2){
console.log(chalk.red("Sorry, you're not a Potterhead!! Better luck next time!"))
} else {
  console.log(chalk.green("Yayyy! You qualify as a Potterhead!! We gotta be friends!!! :D"))
}
console.log(chalk.bgGray("finalscore function has run"))
}

welcome()
quizquests()
quiz()
finalscore()
