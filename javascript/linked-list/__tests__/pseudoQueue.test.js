const PseudoQueue = require("../pseudoQueue.js");

describe("pseudoQueue", () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  describe("enqueue", () => {
    it("should add elements to the PseudoQueue in a FIFO approach", () => {
      pseudoQueue.enqueue(1);
      pseudoQueue.enqueue(2);
      pseudoQueue.enqueue(3);

      expect(pseudoQueue.dequeue()).toBe(1);
      expect(pseudoQueue.dequeue()).toBe(2);
      expect(pseudoQueue.dequeue()).toBe(3);
    });
  });

  describe("dequeue", () => {
    it("should remove elements from the PseudoQueue in a FIFO approach", () => {
      pseudoQueue.enqueue(10);
      pseudoQueue.enqueue(20);
      pseudoQueue.enqueue(30);

      expect(pseudoQueue.dequeue()).toBe(10);
      expect(pseudoQueue.dequeue()).toBe(20);
      expect(pseudoQueue.dequeue()).toBe(30);
    });

    it("should return error when trying to dequeue from an empty PseudoQueue", () => {
      expect(() => pseudoQueue.dequeue()).toThrow(
        new Error("Stack is empty, cannot pop")
      );
    });
  });
  it("should verify if there is are  balanced opening and closing brackets ", () => {
    expect(pseudoQueue.validateBrackets("()")).toBe(true);
    expect(pseudoQueue.validateBrackets("[]")).toBe(true);
    expect(pseudoQueue.validateBrackets("{}")).toBe(true);
    expect(pseudoQueue.validateBrackets("[{()}]")).toBe(true);
    expect(pseudoQueue.validateBrackets("{[()]}")).toBe(true);
    expect(pseudoQueue.validateBrackets("[{}{}()]")).toBe(true);
  });
  it("should return false for unbalanced brackets", () => {
    expect(pseudoQueue.validateBrackets("(")).toBe(false);
    expect(pseudoQueue.validateBrackets(")")).toBe(false);
    expect(pseudoQueue.validateBrackets("[")).toBe(false);
    expect(pseudoQueue.validateBrackets("]")).toBe(false);
    expect(pseudoQueue.validateBrackets("{")).toBe(false);
    expect(pseudoQueue.validateBrackets("}")).toBe(false);
    expect(pseudoQueue.validateBrackets("[{)")).toBe(false);
    expect(pseudoQueue.validateBrackets("{[)]")).toBe(false);
    expect(pseudoQueue.validateBrackets("([)]")).toBe(false);
    expect(pseudoQueue.validateBrackets("{[}]")).toBe(false);
  });
});
