const { Stack } = require("./stacks&queues.js");

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class Stack {
//   constructor() {
//     this.values = [];
//   }

//   push(value) {
//     this.values.push(value);
//   }
//   pop() {
//     if (!this.isEmpty()) {
//       return this.values.pop();
//     }
//     return null;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.values[this.values.length - 1];
//     }
//     return null;
//   }

//   isEmpty() {
//     return this.values.length === 0;
//   }
// }

// transfer() {
//   while (this.in.top) {
//     const temp = this.in.pop();
//     this.out.push(temp.value);
//   }
// }

// enqueue(value) {
//   this.in.push(value);
// }

// dequeue() {
//   if (this.out.top) {
//     return this.out.pop();
//   }
//   if (this.in.top) {
//     transfer();
//     return this.out.pop();
//   }
//   return null;
// }
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(value);
  }

  dequeue() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
