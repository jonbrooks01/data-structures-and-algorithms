class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error("Stack is empty, cannot pop");
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (!this.top) {
      throw new Error("Stack is empty, cannot peek");
    }
    const top = this.top.value;
    return top;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (!this.front) {
      throw new Error("Queue is empty, cannot dequeue");
    }
    const dequeueValue = this.front.value;
    this.front = this.front.next;
    return dequeueValue;
  }

  peek() {
    if (!this.front) {
      throw new Error("Queue is empty, cannot peek");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Stack, Queue };
