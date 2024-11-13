

// ternary Operator :- The **ternary operator** is a shorthand for conditionals: `condition ? value_if_true : value_if_false`. It returns one of two values based on the condition.

const age = 23;
age >= 18 ? console.log('i like to drink juice') : console.log('i like to drink Water') 

const drink = age>=18 ? "wine" : "water";
console.log(drink);


let drink2;
if(age>=18){
  drink2 = 'wine';
}
else{
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age>18 ? 'wine' : 'Water'}`);

