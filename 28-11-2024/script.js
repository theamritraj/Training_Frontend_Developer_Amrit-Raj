//1.


function longestSubstring(s){
  let maxLength= 0;
  let currentSubstring = '';

  for (let char of s){
    if(currentSubstring.includes(char)){
      currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char)+1);
    }
    currentSubstring+=char;
    maxLength=Math.max(maxLength,currentSubstring.length);
  }


  return maxLength;
}
console.log(longestSubstring('abcabcbb'));   //3





//2.

function findPairs(arr,target){
  const pairs =[];
  const seen = new Set();

  for (let num of arr){
    const complement = target-num;
    if(seen.has(complement)){
      pairs.push([complement,num]);
    }
    seen.add(num);
  }
  return pairs;
}

console.log(findPairs([1,2,3,4,5],6));



//3.

function arrayIntersection(arr1,arr2){
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = [];

  for(let item of set1){
    if(set2.has(item)){
      intersection.push(item);
    }
  }
  return intersection;
}

console.log(arrayIntersection([1,2,3],[2,3,4]));




//4.

function wordCount(str){
  const words =str.split(' ');
  const count ={};

  for(let word of words){
    word=word.toLowerCase();
    count[word]=(count[word]||0)+1;
  }

  return count;
}
console.log(wordCount("the cat and the dog"));


//5.

function isBalanced(s){
  let stack =[];
  let map = {')':'(','}':'{',']':'['};
  for(let char of s){
    if (char==='(' || char=== '['){
      stack.push(char);
    }
    else if(char==='(' || char==='}' || char===']'){
      if(stack.pop()!==map[char]){
        return false;
      }
    }
    }
    return stack.length===0;
  }

console.log(isBalanced("{[(]}"));
console.log(isBalanced("{[(])"));




//end...


