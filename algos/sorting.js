function bubbleSort(array) {
  let noSwaps;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        noSwaps = false;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// console.log(bubbleSort([1,6,2,8,3,5]))
// i = 5
//

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minimum] > array[j]) {
        minimum = j;
      }
    }
    if (i !== minimum) [array[i], array[minimum]] = [array[minimum], array[i]];
  }
  return array;
}

// console.log(selectionSort([8,6,2,8,3,5]))
// console.log(selectionSort([12,26,22,68,3,35]))

function insertionSort(array) {
  let sortedArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    sortedArray.push(array[i]);
    for (let j = i; j > 0 && sortedArray[j] < sortedArray[j - 1]; j--) {
      [sortedArray[j], sortedArray[j - 1]] = [
        sortedArray[j - 1],
        sortedArray[j],
      ];
    }
  }
  return sortedArray;
}

// console.log(insertionSort([8,6,2,8,3,5]))
// console.log(insertionSort([12,26,22,68,3,35]))

function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

// console.log(insertionSort2([8,6,2,8,3,5]))
// console.log(insertionSort2([12,26,22,68,3,35]))

// [3,12,22,26,68,35]
// [3,12,22,26,68,68]
// 6

// function mergeArrays(first, second) {
//   let mergedArray = [];
//   f = 0;
//   s = 0;

//   while (f < first.length || s < second.length) {
//     if (first[f] < second[s]) {
//       mergedArray.push(first[f]);
//       if (f === first.length - 1) {
//         return [...mergedArray, ...second.splice(s)];
//       }
//       f++;
//     } else {
//       mergedArray.push(second[s])
//       if (s === second.length - 1) {
//         return [...mergedArray, ...first.splice(f)];
//       }
//       s++;
//     }
//   }
//   return mergedArray;
// }
function mergeArrays(first, second) {
  let mergedArray = [];
  f = 0;
  s = 0;

  while (f < first.length && s < second.length) {
    if (first[f] < second[s]) {
      mergedArray.push(first[f]);
      f++;
    } else if (first[f] === second[s]) {
      mergedArray.push(first[f]);
      mergedArray.push(second[s]);
      f++;
      s++;
    } else {
      mergedArray.push(second[s]);
      s++;
    }
  }
  if (f === first.length) return [...mergedArray, ...second.splice(s)];
  if (s === second.length) return [...mergedArray, ...first.splice(f)];
  return mergedArray;
}

// console.log(mergeArrays([1,4,5,8], [3,6,7,9]));
// console.log(mergeArrays([], [3,6,7,9]));

// console.log(mergeArrays([2,5,7,9], [4,8,11,20]));
// console.log(mergeArrays([1,4,7,8], [3,6,16,17,19]));
// console.log(mergeArrays([1,4,7,8], [2,3,4,5,6,16,17,19]));

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return mergeArrays(left, right);
}

// if I forget how this works: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072016
// console.log(mergeSort([5,2,8,10]));

// [6,2,16,4,19]
// 6 --> 2 items less than (2, 4)
// 6 was in position 0, now should be in position 2 (0 + 2)
// do a swap? with the item in that spot?

function pivot(array, start = 0, end = array.length - 1) {
  let pivotValue = array[start];
  let pivotPosition = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivotValue) {
      pivotPosition++;
      [array[i], array[pivotPosition]] = [array[pivotPosition], array[i]];
    }
  }
  [array[start], array[pivotPosition]] = [array[pivotPosition], array[start]];
  return pivotPosition;
}

// console.log(pivot([6,7,3,1]))
// console.log(pivot([6,7,3,1,8,2,5,3]))
// console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    // console.log('array pre pivot', array);
    let pivotIdx = pivot(array, left, right);
    // console.log('array after pivot', array);
    quickSort(array, left, pivotIdx - 1);

    quickSort(array, pivotIdx + 1, right);
  }
  return array;
}

// if I forget how this works: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072080
// quick sort continues to modify the array on smaller and smaller arrays
// modified array is the input for next quick sort

// console.log(quickSort([6,7,3,1,8,2,5]))

function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([12345,13,556,123,23551111]));

function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  let numsArray = nums;

  for (let i = 0; i < maxDigits; i++) {
    let bucketArray = [...Array(10)].map((x) => Array());
    // another way
    // Array.from({ length: 10}, () => []);
    for (let j = 0; j < numsArray.length; j++) {
      let currentDigit = getDigit(numsArray[j], i);
      bucketArray[currentDigit].push(numsArray[j]);
    }
    numsArray = [].concat(...bucketArray);
  }
  return numsArray;
}

console.log(radixSort([1123, 753, 74278, 323, 2, 712, 1]));

// STOPPED at radix, return to this point
