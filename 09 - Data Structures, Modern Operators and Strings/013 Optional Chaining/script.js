/*

Optional Chaining is a feature in javascript that allows you to access properties of an object or elements of an array without having to check whether the object or array is null or undefined first. It is represented by the ? operator and can be used to concisely access deeply nested properties without having to write a long chain of if  statements to check  for null or undefined values.










optional chaining can be used to acess elements of an array in javascript. it works in a similar way to accessing properties of an objects, but using the ?.[] operator instead of the ?.

*/

const user ={
  name:'Amrit',
  age:23,
  profession:'web developer',
  address:{
    street:"main st",
    city:'nokha',
    state:'Bihar',
    zip:802215
  },
}


// console.log(user.address.city);

console.log(user.address?.roadNumber?.houseNumber);




const users=[
  {name:'AMrit',age:23},
  {name:'Ankit',age:23},
  {name:'Rishu',age:23},
  {name:'Sangam',age:23},

]

console.log(users[3]?.name);


