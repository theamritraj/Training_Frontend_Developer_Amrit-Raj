//008 The Nullish Coalescing Operator ()
/*
what is Nullish Coalescing Operator?
the nulish coalescing operator (??) is javascript operator that is used to provide a default value for a variable that may be null or undefined.

in javascript the following values are considered falsy:
these are five :- false,0," "(an empty string),null undefined and NaN.




what is use Nullish Coalescing Operator?


*/


let users = {
  student:{
    name:"suraj",
    age:25
  }
}
console.log(users.student.name);


let myVal = 0;
const myNumber = myVal || 10;     // or operator 
const myNumber2 = myVal ?? 10;

console.log(myNumber);
console.log(myNumber2);



