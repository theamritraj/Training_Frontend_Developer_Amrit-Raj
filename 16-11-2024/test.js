// declare to variable x and y. assign value 10 and 20.
//swap the values of x and y without using a third variable.

let x = 10;
let y = 20;
x = x + y;
y = x - y;
x = x - y;

console.log(`x = ${x}, y = ${y} `);


/*
 const pi = 3.14;

 pi = 3.1414; // if i re-assign the value in const, const does not allow re -declare and re-assign.

*/


// 2. write a function greet that accept a name and returns the string "Hello"[nmae]! welcome using template literals.
// if no name is passed the default value should be "Guest".



function greet (name ="Guest"){
  return `Hello, ${name}! Welocome!`;
}

//console.log(greet());
console.log(greet("Amrit"));




//03. write an if else statement that checks if a variable score is between 90 and 100. if true console.log("Excellent ") if score is between 70 and 89, console.log(" Good ")
//otherwise console.log("Need Improvement")


let score = 95;

if (score>=90 && score <=100){
  console.log("Excellent");
}
else if(score>=70 && score<=89){
  console.log(" Good ");
}
else{
  console.log("Need Improvement");
}


/*

4.Write a switch statement that takes a variable fruit with possible values of "apple", "banana", "orange", and "grape". Log the price of each fruit: apples cost $2, bananas $1, oranges $3, and grapes $5. For any other fruit, log "Fruit not available". 

*/
let fruit = "banana";

switch (fruit){
  case "apple":console.log("$2");
  break;

  case "banana":console.log("$1");
  break;
  case "orange":console.log("$3");
  break;
  case "grapes":console.log("$5");
  break;
  default: console.log("Fruits is not available");
}



/*
    5.Write a function square that takes one argument and returns its square. Then, rewrite the same function using arrow function syntax.

*/

const  square =(num)=>num * num;
console.log(square(5));


//( or )


let num =9 ;

console.log(num%2===0 ? "Even":"Odd");