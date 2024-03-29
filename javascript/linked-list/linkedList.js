// make a class node
// initialize the value property and next property
// make a linked list class
// give it a head
// while loop where when the ll value is truthy we enter the loop
// use a temp or current value to start the loop
// go to the next node
// at the end we will exit the loop

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    if (!current) return;
    while (current?.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  // includes
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return "NULL";
    let current = this.head;
    let returnStr = "";
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += "NULL";
    return returnStr;
  }

  // append
  // arguments: new value
  //adds a new node with a given value to the end of the list
  // - create a function that takes in a NEW VALUE
  // - make a new node with the value argument
  // - traverse to the end
  // - end node.next will be the new node
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified
  // check the head to see if it matches our value, if it does insert()
  // loop through the list, check current.next.value to see if it is the value we are looking for
  // when we find that value insert the new node (temp is current.next, current.next is new node, new node.next is temp)
  // return the list
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) this.head = newNode;

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }
  //insert after
  // arguments: value, new value
  //adds a new node with the given new value immediately after the first node that has the value specified
  // assign head to current
  // check current.value to see if it matches the argument
  //temp is the current.next
  // current.next is the new node
  // new node.next is temp
  // return list
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) this.head = newNode;

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        const temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }

  // k-th value
  // takes in a value to find starting from the end traversing until it finds that number.
  // once number
  kthFromEnd(k) {
    if (!this.head || k < 0) {
      return null;
    }

    let fastPass = this.head;
    let slowPass = this.head;

    for (let i = 0; i < k; i++) {
      if (!fastPass.next) {
        return null;
      }
      fastPass = fastPass.next;
    }

    while (fastPass.next) {
      fastPass = fastPass.next;
      slowPass = slowPass.next;
    }
    return slowPass.value;
  }
}

module.exports = { LinkedList, Node };

// kthFromEnd(k) {
//   if (!this.head || k < 0) {
//     return null;
//   }

//   let length = 0;
//   let current = this.head;
//   while (current) {
//     length++;
//     current = current.next;
//   }

//   if (k >= length) {
//     return null;
//   }

//   let traverse = length - k - 1;
//   current = this.head;
//   for (let i = 0; i < traverse; i++) {
//     current = current.next;
//   }
//   return current.value;
// }

function zipLists(list1, list2) {
  if (!list1 || !list1.head) return list2;
  if (!list2 || !list2.head) return list1;

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 !== null && current2 !== null) {
    next1 = current1.next;
    next2 = current2.next;

    current1.next = current2;
    current2.next = next1;

    current1 = next1;
    current2 = next2;
  }

  if (current2 !== null) {
    current1.next = current2;
    list1.head = list2.head;
    list2.head = current2;
  }

  return list1;
}
// let current1 = list1.head;
// let current2 = list2.head;
// let temp = current2.next;

// while (current1 && temp) {
//   current2.next = current1.next;
//   current1.next = current2;
//   current1 = current2.next;
//   current2 = temp;
//   temp = current2.next;
// }

module.exports = { LinkedList, Node, zipLists };
