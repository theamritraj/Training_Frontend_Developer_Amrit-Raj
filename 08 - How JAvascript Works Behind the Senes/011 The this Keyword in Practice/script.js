

console.log(this);


const calcAge = function (birthYear){
  console.log(2024- birthYear);
  console.log(this);
};

calcAge(1998);


const calcArrow = birthYear =>{
  console.log(2037- birthYear);
  console.log(this);
   
};

calcArrow(1980);





const jones ={
  year :1991,
  calcAge:function(){
    console.log(this);
    
  },
}
jones.calcAge();




