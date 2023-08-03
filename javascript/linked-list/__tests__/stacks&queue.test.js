"use strict";
const { Stack, Queue } = require("../stacks&queues.js");

const dummyLL1 = {
  value: "3",
  next: {
    value: "8",
    next: {
      value: "4",
      next: null,
    },
  },
};

const dummyLL2 = { next: "null" };

// const dummyLL2 = {
//   value: "7",
//   next: {
//     value: "1",
//     next: {
//       value: "5",
//       next: null,
//     },
//   },
// };

describe("Stacks and Queues test suite ", () => {
  test("can successfully push a new value into a stack", () => {
    const testLL = new Stack(dummyLL1);
    testLL.push(5);
    expect(testLL).toEqual({
      top: {
        value: 5,
        next: {
          value: "3",
          next: {
            value: "8",
            next: {
              value: "4",
              next: null,
            },
          },
        },
      },
    });
  });

  test("can successfully push multiple values into a stack", () => {
    const testLL = new Stack(dummyLL1);
    testLL.push(5);
    testLL.push(10);
    testLL.push(7);
    expect(testLL).toEqual({
      top: {
        value: 7,
        next: {
          value: 10,
          next: {
            value: 5,
            next: {
              value: "3",
              next: {
                value: "8",
                next: {
                  value: "4",
                  next: null,
                },
              },
            },
          },
        },
      },
    });
  });

  test("can successfully pop a value from a stack ", () => {
    const testLL = new Stack(dummyLL1);
    testLL.pop();
    expect(testLL.pop()).toBe("8");
  });
  test("can successfully empty a stack with mutiple pops", () => {
    const testLL = new Stack(dummyLL1);
    testLL.pop();
    testLL.pop();
    testLL.pop();
    expect(testLL.isEmpty()).toEqual(true);
  });
  test("can successfully peek the top value", () => {
    const testLL = new Stack(dummyLL1);
    testLL.peek();
    expect(testLL.peek()).toBe("3");
  });
  test("can successfully check to see if the stack is empty", () => {
    const testLL = new Stack(dummyLL1);
    testLL.isEmpty();
    expect(testLL.isEmpty()).toEqual(false);
  });
  test("can successfully raise an error on a stack ", () => {
    const testLL = new Stack();
    try {
      testLL.pop();
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe("Stack is empty, cannot pop");
    }
  });
  test("can successfully enqueue into a queue", () => {
    const testLL = new Queue(dummyLL1);
    testLL.enqueue(10);
    console.log(testLL);
    expect(testLL.enqueue()).toEqual();
  });
  test("can successfully enqueue mutiple values into queue", () => {});
  test("can successfully dequeue a value out of a queue", () => {
    const testLL = new Queue(dummyLL1);
    testLL.dequeue();
    console.log(testLL);
    expect(testLL.dequeue()).toEqual("8");
  });
  test("can successfully peek into a queue", () => {
    const testLL = new Queue(dummyLL1);
    testLL.peek();
    expect(testLL.peek()).toEqual("3");
  });
  test("can successfully empty a queue with multiple dequeues", () => {
    const testLL = new Queue(dummyLL1);
    testLL.dequeue();
    testLL.dequeue();
    testLL.dequeue();
    expect(testLL.isEmpty()).toEqual(true);
  });
  test("can test if a queue is empty", () => {
    const testLL = new Queue(dummyLL2);
    testLL.isEmpty();
    expect(testLL.isEmpty()).toBe(true);
  });
  test("can raise exception on empty queue", () => {
    const testLL = new Queue();
    try {
      testLL.peek();
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe("Queue is empty, cannot peek");
    }
  });
});
