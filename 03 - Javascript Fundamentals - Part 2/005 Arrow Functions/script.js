const calAge3 = birtYah => 2037 - birtYah;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = birtYah =>{
  const age = 2037 - birtYah;
  const retirement = 65 - age ;
  return retirement;
}


console.log(yearsUntilRetirement(1991));

