

function calAge1 (birthYeah){
  return 2037 - birthYeah;

}

const age1 = calAge1(1991);
console.log(age1);



const calAge2 = function (birthYeah){
  return 2097 - birthYeah;

}

const age2 = calAge2(1991);

console.log(age1,age2);
