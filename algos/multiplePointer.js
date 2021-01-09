function countUniqueValues(array) {
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 < array.length) {
    if (array[pointer1] === array[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
      array[pointer1] = array[pointer2];
      pointer2++;
    }
  }
  return array.length === 0 ? 0 : pointer1 + 1;
}
// function countUniqueValues(array) {
//   let storer = 0;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] !== array[storer]) {
//       storer++;
//       array[storer] = array[i];
//     }
//   }
//   return storer + 1;
// }

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 5, 5, 6, 7]));
console.log(countUniqueValues([1, 3, 4, 5, 5, 6]));

console.log(countUniqueValues([]));

function countUniqueValuesOnly(array) {
  // should there be a counter for unique? once you get past the next number
  // if two numbers are different, check next numner, if different, add one to 'unique'
  let storer = 0;
  let uniqueValues = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[storer] && array[i] !== array[i + 1]) {
      uniqueValues++;
    }
    storer++;
  }
  return uniqueValues;
}

console.log(countUniqueValuesOnly([1, 1, 1, 2, 3, 3, 5, 5, 6, 7]));

console.log(countUniqueValuesOnly([]));

function averagePair(array, average) {
  let low = 0;
  let high = array.length - 1;
  let currentAvg;
  while (low < high) {
    currentAvg = (array[low] + array[high]) / 2;
    if (currentAvg === average) {
      return true;
    }
    if (currentAvg > average) {
      high--;
    }
    if (currentAvg < average) {
      low++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

function isSubsequence(string1, string2) {
  let orgRef = 0;
  for (var i = 0; i < string2.length; i++) {
    if (string2[i] === string1[orgRef]) {
      orgRef++;
    }
    if (orgRef === string1.length - 1) {
      return true;
    }
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acd')); // false
