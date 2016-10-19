// this is a comment
/* this is a block comment */

// variables: storage containers, store data, no spaces
// when you dont assign a var a value, it would be "undefined"

// console.log is what console sees 

// = is assignment
// == checks for eqality of 2 expressions
// variables can be reassigned

var myName = "Jon";
// this is a string, must be in quotes (single or double)

var myAge = 12;
// this is an integer

var booleanExample = true;
// boolean type (T or F)

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