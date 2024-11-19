/*
for-of and for-in are two different looping constructs in javascript.

//for-of is used to iterate over the values in an iterable object, such as an array or a string. it allows you to access the values of the objects directly without having to use an index 





for-in : is used to iterate over the enumerable properties of an objects. it allows you to access the keys of subject rather than values.



summary if we want values of array then go with for and if we want keys [index] then go with in.


// we used:-

for .... of  for [array , map set string] to iterate over values;
for .... in for an array to iterate over a key;
for .... in for objects to enumerate its (object's) properties;


*/


const myName ="Amrit";
const myLuckyNum = [1,2,3,4,5,6,7,8]

for (let num of myLuckyNum){
  console.log("My Numbers " + myLuckyNum);
  
}


