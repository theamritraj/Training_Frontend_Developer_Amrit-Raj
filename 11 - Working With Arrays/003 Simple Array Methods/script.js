/*
 What is aRRAY ?
 an array is special varable which can hold more than one variable at a time.
 

 the array object let's you 
 store multiple values in a single variable.


 var a = "arjun";

 var b = "naran";

 var c = "Rakesh";
 
*/


// var friends = ["arjun",'narayan','Rakesh'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);



// var friends = new  Array("arjun",'narayan','Rakesh');
// console.log(friends);


// var friends = friends[0];
// friends[0]="Arjun";





/*
At=rray Property :-

The length property sets or returns the number of elements in an array



Array Methods:-

Sort()  methods sorts the items of an aray.
the sort order can be either alphabetic or numeric and either ascending(up) or descending (down)



Pop() method removes the last index elements of an array,
and return the elements.


Push() methods add new items too the end of an aray,
and return the new length.

Shift() method removes the first item of an aray.


Unshift() methods add new items to the beginning of an array and returns the new lenght.

Reverse() method reverses the order of the elements in an array.

isArray()


Concat() method is used to join two or more arrays.


indexOf() method searches the array for the specifed item, returns its positions.



 */




//sort()

var arr = ['Amrit','Vishal','Ankit'];
arr.sort();
console.log(arr);



//push() add new item in the end.
arr.push('Rishu');
console.log(arr);



//pop()  remove last index element.
arr.pop();
console.log(arr);


//shift() remove first index element.
arr.shift();
console.log(arr);


//unshift() add new element in first index elements.
arr.unshift('Amrit Raj');
console.log(arr);




//reverse() reverse the array.
arr.reverse();
console.log(arr);


//isArray 
var arr = 34;
var check = Array.isArray(arr);
console.log(check);



//concat()  add two arrays 
var arr = [22,33,44,66,77];
var arr2 = [55,88,99];
console.log(arr.concat(arr2));



//indexOf()
console.log(arr.indexOf(44)); //2


//slice()


//Splice()





