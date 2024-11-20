/*
Arguments             Description

currentValue          Required. The value of the current element.
index Optional.       the array index object the current element
arr optional.         the array object the current element belongs to




*/



const studentdata = [
  {id:1, name: "Amrit", degree: "MCS"},
  {id:1, name: "Ankit", degree: "MSc"},
  {id:1, name: "Sangam", degree: "MS",degree:"cs"},
]


//console.log(studentdata[0].name);



const newData = studentdata.map( (cvalue)=>{
  return `my name is ${cvalue.name} . My highest degree is ${cvalue.degree}`;
});


document.getElementById('showData').innerHTML=newData;



console.log(newData);
