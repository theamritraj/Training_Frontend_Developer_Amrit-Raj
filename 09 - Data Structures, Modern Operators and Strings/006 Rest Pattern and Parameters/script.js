/*


Rest Parameter :- Rest Parameter is an improved way to handle function Parameter, allowing us to more easily handle various input as parameters in a function.
the rest parameter syntax allows us to represents an indefinite number of arguments as an Array.prototype

*/


//es 5

function sum(a,b){
  console.log(a+b+c+d+e+f);
  
}

sum(1,2,3,4,5,6);

//es6

function sum(...args){
  console.log(...args);
 let total = 0;  
  for(let i of args){
    total +=i;   
    
  }
 
  console.log(total);
  
  
}

sum(1,2,3,4,5,6);




function fun(a,b,...c){
  console.log(`${a} ${b}`); //Ronaldo neymar
  console.log(c); //pele messi edan
  console.log(c[0]); //pele
  console.log(c.length); //3
  console.log(c.indexOf('Edan')); //2
  
  
}

fun('Ronaldo','Neymar','Pele','Messi','Edan');
