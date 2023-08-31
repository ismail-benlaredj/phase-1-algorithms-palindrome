function isPalindrome(word) {
  // Write your algorithm here
  let i = 0,
    j = word.length - 1
  while (i <= j) {
    if (word[i] == word[j]) {
      i++
      j--
    } else {
      return false
    }
    return true
  }
}


// Big O : time complexity : n(o)
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  two pointers that moves to the middle(from the start and the end of the word) 
  if letters don't match we return false otherwise continue moving the pointers 
  return true 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
