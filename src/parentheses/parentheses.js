
const Stack = require("../lib/stack");

const match = (expression) => {
  const newStack = new Stack();

  for (let i = 0, limit = expression.length; i < limit; i++) {
    if (expression[i] === "(") {
      newStack.push("(");
    } else {
      if (expression[i] === ")") {
        if (newStack.top) {
          newStack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !newStack.top;
};

module.exports = match;