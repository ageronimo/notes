// this is a comment
/* this is a block comment */

// variables: storage containers, store data, no spaces
// when you dont assign a var a value, it would be "undefined"

// console.log is what console sees 

// = is assignment
// == checks for eqality of 2 expressions
// === strict equality, checks if expressions are of same value type too
// variables can be reassigned

var myName = "Jon";
// this is a string, must be in quotes (single or double)

var myAge = 12;
// this is an integer

var booleanExample = true;
// boolean type (T or F)

var notAssigned;
// var w/out value stated can be assigned value later on

/* Boolean Operators
!== not equals
> greater than
< less than
>= greater or equal to
<= less or equal to
  */

undefined
// unassigned variable

NaN
// not a number

var myArray = ["one", 2, "seven", true];
// array


// objects




function (){

} 
// function is an execute statement

function nameOfFunction (){
  console.log('hello i am a new function');
}

nameOfFunction();
// how to invoke a function

function hello (a, b) {
  console.log(a + b);
}

hello(10 + 11);
// parameters



// process of making function
function createGreeting (name, age){
  if (age < 32){
    console.log('hello ' + name);
    return 'hello' + name;
  }
  else{
    console.log('hello Mr. ' + name);
    return 'hello' + name;
  }
}

createGreeting('Tan', 18);
// invoking function


// ALIENS! project 
var blue = 1000;
var green = 4000;
var red = 5000;

if (blue + green + red == 10000){
  if (green > 5000){
    console.log("Ugh why are they so ugly");
  }
  if (greed + red > 8000){
    console.log("It's starting to feel a lot like Christmas");
  }
  if (red + blue <= 3000){
    console.log("We are sooo dead dude.");
  }
}

function Calculator (operation, firstVal, secondVal){
  if (operation == "addition"){
    return firstVal + secondVal;
  } else if (operation == "subtraction"){
    return firstVal - secondVal;
  } else if (operation == "multiplication"){
    return firstVal * secondVal;
  } else if (operation == "division"){
    return firstVal / secondVal;
  } 
}

console.log(Calculator("addition", 1, 2));



