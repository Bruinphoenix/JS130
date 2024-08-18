function makeStack() {
  const stack = [];

  return {
    push(item) {
      stack.push(item)
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(item => {
        console.log(item);
      })
    }
  }
}

let myStack = makeStack();
myStack.push('hello world');
myStack.push('welcom');
myStack.printStack();
console.log(myStack.pop());

