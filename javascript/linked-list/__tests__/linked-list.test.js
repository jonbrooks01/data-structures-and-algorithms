
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

describe("linked list test suite", () => {
  test('Can successfully instantiate an empty linked list', () => {
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
  test("it can insert a node at the end of the list", () => {
    // insert a node then check that the last node of the list matches the value
    // insert it
    // traverse the list
    // compare it to our expected toString value
    const testLL = new LinkedList(dummyLL);
    testLL.append("d")
    expect(testLL.toString()).toEqual("{ a } -> { b } -> { c } -> { d } -> NULL");
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
