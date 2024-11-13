/*

Mark and John are trying to compare their BMI (body mass index ) which is calculated using the formula :
BMI = mass / height **2 = mass /(height * height )(mass in kg and height in meter).




Your tasks:
1. store Mark's and Joh's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both versions)

3. create Boolean variable 'markHigherBMI' containig information about whether Mark has a higher BMI than John.


Test data :

Data 1 : Marks weights 78kg and is 1.69 m tall. John weights 92kg and is 1.9m tall.

*/

let massMark =  78;
let heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark =  massMark / heightMark**2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark> BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

