function sameFrequency(n1, n2) {
  const stringifiedNum = n1.toString();
  const stringifieTdNum = n2.toString();
  if (stringifieTdNum.length !== stringifiedNum.length) return false;
  let refObj = {};
  for (let num of stringifiedNum) {
    refObj[num] = ++refObj[num] || 1;
  }
  for (let num of stringifieTdNum) {
    if (!refObj[num]) return false;
    --refObj[num];
  }
  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3443, 433));
// console.log(sameFrequency(334, 333));

function areThereDuplicates(...items) {
  let ref = {};
  for (let item of items) {
    if (ref[item]) {
      return true;
    } else {
      ref[item] = 1;
    }
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates(1, 5, 2));
// console.log(areThereDuplicates(1, 3, 5, 8, 0, 22, 55, 33));
// console.log(areThereDuplicates(1, 4, 1));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// potentially convert if to switch statement
function averagePair(numbers, average) {
  let lowerInd = 0;
  let upperInd = numbers.length - 1;
  while (lowerInd < upperInd) {
    let averageCalc = numbers[lowerInd] + numbers[upperInd] / 2;
    if (averageCalc === average) return true;
    if (averageCalc > average) {
      --upperInd;
    } else {
      ++lowerInd;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 4, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));

// determine whether string 2 has the same characters in string 1 in the same order
// however, can have other characters between
function isSubsequence(string1, string2) {
  const arrayified = [...string1, ...string2];
  let firstWordInd = 0;
  let secondWordInd = string1.length;

  while (secondWordInd < arrayified.length - 1 && firstWordInd < secondWordInd) {
    if (arrayified[firstWordInd] == arrayified[secondWordInd]) {
      ++firstWordInd;
      ++secondWordInd;
      if (firstWordInd === string1.length - 1) return true;
    } else {
      ++secondWordInd;
    }
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));

function maxSubarraySum(array, sub) {
  if (array.length < sub) return null;
  let highSum = -Infinity;
  let newSum = 0;
  for (let i = 0; i < sub; i++) {
    newSum += array[i];
  }
  highSum = Math.max(highSum, newSum);
  for (let i = sub; i < array.length; i++) {
    newSum += array[i] - array[i - sub];
    highSum = Math.max(highSum, newSum);
  }
  return highSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
