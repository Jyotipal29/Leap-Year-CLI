var readlineSync = require('readline-sync');
const chalk = require('chalk');
function welcome(){
  console.log(chalk.greenBright("Leap year which has 366 days including 29 February as an intercalary day."));
  console.log(chalk.greenBright("let's check if your birth year is a leap year"));
  console.log(chalk.cyanBright("************************"));
var userName = readlineSync.question(chalk.blue.bold('What is your Name ?\n '));
console.log(chalk.yellowBright.bold("welcome "+userName));
console.log(chalk.cyanBright("************************"));
}
function askUser(){
  var userAns = readlineSync.question(chalk.magentaBright.bold('May i know your birth year ?0000\n'));
  
   console.log(chalk.cyanBright("*********************"));
  
if(isNaN(userAns)){
  console.log(chalk.red.bold("Please ennter number"));
}
   else{
    checkPrime(userAns)
  }
}

function checkPrime(userAns){
  
if(userAns%4==0){
  console.log(chalk.green("You were born in leap year"));
}else{
  console.log(chalk.red("Sorry! You were not born in a leap year"));
}
   
 }

welcome();
askUser();