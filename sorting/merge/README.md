# Blog Notes: Merge Sort

Merge sort is a sorting algorithm that separates the array into even parts. it then proceeds to split those parts further if need be. Once the array has been split as far as it will go the function then checks the values in each small subArray. Once the subArrays get sorted the function will put the subArrays back together checking the value of each to determine the smallest. once the subArrays are together the process continues until the array is complete and in order.

Step 1

- [8,4,23,42,16,15]

The function take the array ands splits it evenly

Step 2

- [8,4,23] [42,16,15]

Once the array is split in subArrays it will continue to split if needed. Otherwise the function will compare each value in the subArray to the others in order to sort them

Step 3

- [8] - [4] - [23]  |  [42] - [16] - [15]

The function will then put the values in order

Step 4

- [4,8,23] | [15,16,42]

Once the subArrays are in order they will combine to the original array.

Step 5

-[4,]

- ["4",8,23] | ["15",16,23]

The function will look at each [0] to determine which is smaller
Step 6

-[4,]

- ['8',23] | ["15",16,23]

Once that value is placed in the array it will compare the second value to the [0] from the other array.

Step 7

-[4,8,]

- [23] | ["15",16,23]

This will continue until all values are in order and back in the original array.

## Efficiency

Time: BigO will be O(n) since the time is depended on how long the array is.

Space: BigO will be O(n) since the values are going back to the original array.
