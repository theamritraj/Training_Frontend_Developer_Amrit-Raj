// 1. map to create HTML List write a function that maps an array of  products names into an aray of <li> elementsas strings.


function mapProductsToHtml(products){
  return products.map( products =>`<li>${products}</li>`);
}


//Example
console.log(mapProductsToHtml(['shirt','shoes','Hat']));




//2. calculate total cart value write a function that calculate the total value of items in a shopping cart using the reduce method.

function calculateTotal(cart){

  return cart.reduce((total,item)=>
    total+item.price,0);
  
}
console.log(calculateTotal([
  {product:'shirt',price:20},
  {product:'shoes',price:50},
]));


//3.









//4. Palindrome Checker

function isPalindrome(str){
  const a =str.toLowerCase();

}

//5. Generate Fibonacci Sequence.







/*


                                      End


*/