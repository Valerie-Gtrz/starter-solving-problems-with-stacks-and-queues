const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  //Remove all spaces and punctuation from the sentence and make all characters lowercase.
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  
  //Declare a variable middle and initialize it to half the length of the sentence, rounding down to an integer value for odd-length strings.
  let middle = Math.floor(sentence.length / 2);

  //Initialize a new stack.
  const newStack = new Stack();

  //Iterate through the sentence, from the first character up to middle. Push each character onto the stack.
  for (let i = 0; i < middle; i++) {
    newStack.push(sentence[i]);
  }

  //Iterate from middle to the end of the sentence.
  //If the sentence is an odd length, then iterate from middle+1 to skip the middle character of the sentence.
  if (sentence.length % 2) {
    middle = middle + 1;
    return true;
  }

  //On each iteration, pop a character from the stack and compare it to the current character.
  for (let index = middle, limit = sentence.length; index < limit; index++) {
    if (sentence[index] !== newStack.pop()) {
      //If they don't match, return false.
      return false;
    }
  }
  //When the loop is done, return true.
  return true;
};

module.exports = isPalindrome;
