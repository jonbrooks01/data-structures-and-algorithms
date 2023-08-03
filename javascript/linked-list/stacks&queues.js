class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
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
    return Boolean(!this.top);
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (!this.front) {
      throw new Error("Queue is empty, cannot dequeue");
    }
    const dequeueValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    return dequeueValue;
  }

  peek() {
    if (!this.front) {
      throw new Error("Queue is empty, cannot peek");
    }
    return this.front.value;
  }

  isEmpty() {
    return Boolean(!this.top);
  }
}

module.exports = { Stack, Queue };
