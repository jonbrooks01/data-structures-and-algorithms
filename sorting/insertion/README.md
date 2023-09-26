# Blog Notes: Insertion Sort

Insertion sort is a sorting algorithm that traverses the array as it slowly traverses the array it builds its sorting sequence. The traversal keeps track of the value and places it in the array where it belongs.

Step 1

- ["8",4,23,42,16,15]

The sorting method records the first position.

Step 2

- ["4",8,23,42,16,15]

The method switches places with the next position checking the value and moving it to the correct position.

Step 3

- [4,8,"23",42,16,15]

The method then moves to the next unknown value and records its value to the known values. It will move it to the correct position if need be.

Step 4

- [4,8,23,"42",16,15]

The method then proceeds to the next value, recording the value and placing it in the correct position.

Step 5

- [4,8,23,42,"16",15]
- [4,8,23,"16",42,15]
- [4,8,"16",23,42,15]

The method records the next value and proceeds with swapping the Values until they are in order.

Step 6

- [4,8,16,23,42,"15"]
- [4,8,16,23,"15",42,]
- [4,8,16,"15",23,42]
- [4,8,"15",16,23,42,]

Step 6

The method goes to the next value and proceeds to place it in the correct position.

Step 7

The method will complete the run through and return the results.

## Efficiency

Time: The method doesn't need to iterate through the array multiple times. The BigO notation will be O(n).

Space: No additional space is created so the BigO notation will be O(1)
