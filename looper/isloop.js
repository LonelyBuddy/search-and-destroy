'use strict';

//Complete this algo
const isLoop = (ll) => {
  let memo = [];

  while (ll.head.next !== null) {
    // if current head.value is in memo  return true
    if (memo.indexOf(ll.head.value) !== -1) {
      return true;
    }
    // else it's not in memo
    else {
      // push current head.value to memo
      memo.push(ll.head.value);
      // assign the current head to be the head.value
      ll.head = ll.head.next;
    }
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop