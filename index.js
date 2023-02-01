//solution1;
function isPalindrome(word) {
  const word1 = word.split("").reverse().join();
  return word === word.split("").reverse().join("");
}

// function reverse(word) {
//   const wordArray = word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reversedWord = reversedWordArray.join("");
//   return reversedWord;
// }
// function isPalindrome(word) {
//   const reversedWord = reverse(word);
// }
// //checking if input is same as output
// if (word === reversedWord) {
//   return true;
// } else {
//   return false;
// }

/* 
  Add your pseudocode here
  reverse the string 
  check if input is the same after being revresed otherwise return false 
  mom===mom
  zakiya===ayikaz //false
  after reversed

*/
// make a function that returns true if the word is a Palindrome
// it should return true

/*
  Add written explanation of your solution here
  mom ===mom //true
  abc===cba //false after reverse 
  we use a method known as reverse()
  in js you cant change a string directly by reversing it i.e 'abc'.reverse()//it will bring errors
  we should put it an array 
  ['a','b','c']//this will work
  thus we can join them using the method .join()
  ['a','b','c'].join('')
  //cba
  and if you want to split you use the .split()
  cba.split(' ')
  result ['a','b','c']

  
  */

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("zakiya"));
}

module.exports = isPalindrome;
