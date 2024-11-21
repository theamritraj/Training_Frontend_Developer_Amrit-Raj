//ForEach () method call a function once for each elementin an array, in order.

//syntax :- arr.forEach(callback(currentValue[,index[,array]])[,thisArg])


const  myfavProg = ['js','c++','Python','php','java'];
console.log(myfavProg[0]);
console.log(myfavProg[1]);
console.log(myfavProg[2]);
console.log(myfavProg[3]);
console.log(myfavProg[4]);



for (let x = 0; x<myfavProg.length; x++){
  console.log(myfavProg[x]);
}


//forEach()

myfavProg.forEach(function (currentValue,index){
  console.log(index + " -- "  + currentValue);
})



//create one array for each element in the array:add the vakues 100 to each items and update the elements value


const newArr = [10,20,30,40,50];
newArr.forEach(function(currentValue,index,arr){
  console.log(arr[index] + 100);
  
});

