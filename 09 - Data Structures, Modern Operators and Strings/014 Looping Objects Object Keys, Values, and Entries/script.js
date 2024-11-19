//to : create an object from the pairs of key and value

cosnt  ArrData = (arr)=>{
  return Object.fromEntries(arr)
}


ArrData([ // this is a function where that is passed as an arguments.
  ['a',1],
  ['b',2],
  ['c',3],
  ['d',4],
]);
