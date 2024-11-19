//es 5

let obj ={
  name : "ABC",
  show: function(){
    console.log(this.name);
    
  }
}




//es 6

let newObj ={
  name : "ABC",
  showNew(){
    console.log(this.name);
    
  }
}





let objNew = {
  firstname:'Amrit',
  lastname:'Raj',
  age:23,
  profession:'web developer'
}
console.log(objNew);

 //change the property name:-
 objNew.profession="Frontend Developer"
 console.log(objNew);


 //add new property

 objNew.middlename ="Kuamr"
 console.log(objNew);

//Delete property name:-

delete objNew.middlename;




 
 



