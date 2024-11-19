/*
Set : Set is collection of unique values. It is similar to an array, but the values in a set are not ordered and can not be repeated.



here is the example of how to create and use a set in javascript:


*/

//create a new set 

const myset = new Set();
//add some values to the set using add method 
myset.add(1);
myset.add(2);
myset.add(3);
myset.add(4);
//check the size of the set using size property 
console.log(myset.size);

//check if a value exists in the set using has method.

console.log(myset.has(4));

// remove a values from the set using delete method
console.log(myset.delete(3));
console.log(myset);


//Iterate over the values in the set 
for(let setValue of myset){
  console.log(setValue);
  
}


//you can also create a set from an aray by using the set constructor:

const array = [1,2,3,4,5,6,7,8,9,6,5,5,4,4,];
const mySetArr = new set(array);
//console.log(mySetArr.size);
console.log(setValue);



