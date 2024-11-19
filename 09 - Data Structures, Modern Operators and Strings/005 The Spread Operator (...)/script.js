//Spread Operator


'use strict';

const restaurant = {
  name:'classico Italiano',
  location : 'via Angelo tavanti 23, Firenze, Italy',
  categories:['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu : ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
  mainMenu : ['Pizza','pasta','Risotto'],

};
const arr = [7,8,9];

const badNweArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNweArr);



const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);




//Iterables : arrays, maps Not Objects

const str = 'jones';
const letter = [...str,'','.s'];
console.log(letter);
console.log(str);


