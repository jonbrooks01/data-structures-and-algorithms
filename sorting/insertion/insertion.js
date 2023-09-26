function insert(arr, value) {
  i = 0;

  while (value > arr[i]) {
    i++;
  }
  for (let j = arr.length - 1; j >= i; j--) {
    arr[j + 1] = arr[j];
  }

  arr[i] = value;
}

function insertionSort(arr) {
  let sorted = [];
  sorted[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    insert(sorted, arr[i]);
  }
  return sorted;
}

module.exports = { insertionSort, insert };
