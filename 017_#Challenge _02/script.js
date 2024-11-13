let massMark =  95;
let heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;



const BMIMark =  massMark / heightMark**2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark,BMIJohn);


if(BMIMark>BMIJohn){
  console.log("Mark's BMI is Higher than john's!");
}
else{
  console.log("John's BMI is Higher than Mark's!");
}
