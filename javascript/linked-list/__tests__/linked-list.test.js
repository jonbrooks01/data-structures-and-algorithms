"use strict";

const { LinkedList } = require("../linkedList.js");
// "{ a } -> { b } -> { c } -> NULL"
const dummyLL = {
  value: "a",
  next: {
    value: "b",
    next: {
      value: "c",
      next: null,
    },
  },
};
const newDummyLL = {
  value: 12,
  next: null,
};

describe("linked list test suite", () => {
  test("Can successfully instantiate an empty linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });
  test("toString method returns the node values in the right format", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
  });
  test("includes method returns true if a value exists, else false", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.includes("b")).toEqual(true);
    expect(testLL.includes("z")).toEqual(false);
  });
  test("insert should take a new value and add it to the front of the list", () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      "{ 1 } -> { a } -> { b } -> { c } -> NULL"
    );
  });
  test("append can insert a node at the end of the list", () => {
    // insert a node then check that the last node of the list matches the value
    // insert it
    // traverse the list
    // compare it to our expected toString value
    const testLL = new LinkedList(dummyLL);
    testLL.append("d");
    expect(testLL.toString()).toEqual(
      "{ a } -> { b } -> { c } -> { d } -> NULL"
    );
  });
  test("can successfully insert a node before a node located i the middle of the linked list", () => {
    const testLLBefore = new LinkedList(dummyLL);
    testLLBefore.insertBefore("b", "1");
    expect(testLLBefore.toString()).toEqual(
      "{ a } -> { 1 } -> { b } -> { c } -> { d } -> NULL"
    );
  });
  test("Can successfully insert after a node in the middle of the linked list", () => {
    const testLLAfter = new LinkedList(dummyLL);
    testLLAfter.insertAfter("c", 2);
    expect(testLLAfter.toString()).toBe(
      "{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> NULL"
    );
  });
  test("Can successfully insert a node before the first node of a linked list", () => {
    const testLLBeforeNode = new LinkedList(dummyLL);
    testLLBeforeNode.insertBefore("a", "0");
    expect(testLLBeforeNode.toString()).toBe(
      "{ 0 } -> { a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> NULL"
    );
  });

  test("Can successfully add multiple nodes to the end of a linked list", () => {
    const testMutiNode = new LinkedList(dummyLL);
    testMutiNode.append("z");
    testMutiNode.append("y");
    testMutiNode.append("r");
    expect(testMutiNode.toString()).toBe(
      "{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> { z } -> { y } -> { r } -> NULL"
    );
  });

  test("Can successfully insert a node after the last node of the linked list", () => {
    const testAfterEnd = new LinkedList(dummyLL);
    testAfterEnd.insertAfter("r", "p");
    expect(testAfterEnd.toString()).toBe(
      "{ a } -> { 1 } -> { b } -> { c } -> { 2 } -> { d } -> { z } -> { y } -> { r } -> { p } -> NULL"
    );
  });
  test("Should return null where k is greater than the length of the linked list", () => {
    const testLongerThenList = new LinkedList(dummyLL);
    expect(testLongerThenList.kthFromEnd(10)).toBeNull();
  });
  test("Should return null where k and the length of the list are the same", () => {
    const equalLength = new LinkedList(dummyLL);
    expect(equalLength.kthFromEnd(10)).toBeNull();
  });
  test("Should return null where k is not a positive integer", () => {
    const notPosInt = new LinkedList(dummyLL);
    expect(notPosInt.kthFromEnd(-5)).toBeNull();
  });
  test("Should return null where the linked list is of a size 1 and k = 0", () => {
    const sizeOfOne = new LinkedList(newDummyLL);
    expect(sizeOfOne.kthFromEnd(0)).toBe(12);
  });
  test("Should return the correct value of k in the middle of the list", () => {
    const middleNum = new LinkedList(dummyLL);
    expect(middleNum.kthFromEnd(5)).toBe(2);
  });
});

// 'use strict';

// // Require our linked list implementation
// const LinkedList = require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });
