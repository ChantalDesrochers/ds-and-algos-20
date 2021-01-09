// function maxSubarraySum(array, sub) {
//   if (array.length < sub) return null;
//   let highSum = -Infinity;
//   let newSum = 0;
//   for (let i = 0; i < sub; i++) {
//     newSum += array[i];
//   }
//   highSum = Math.max(highSum, newSum);
//   for (let i = sub; i < array.length; i++) {
//     newSum += array[i] - array[i - sub];
//     highSum = Math.max(highSum, newSum);
//   }
//   return highSum;
// }
function maxSubarraySum(array, sub) {
  if (array.length < sub) return null;
  let highSum = -Infinity;
  let newSum = 0;
  // for (let i = 0; i < sub; i++) {
  //   newSum += array[i];
  // }
  // highSum = Math.max(highSum, newSum);
  for (let i = 0; i < array.length; i++) {
    if (i < sub) {
      newSum += array[i];
      highSum = newSum;
    } else {
      newSum += array[i] - array[i - sub];
      highSum = Math.max(highSum, newSum);
    }
  }
  return highSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

// return the minimum length of a subsequent array that the sum is greater than or equal to the integer passed in
function minSubArray(array, sub) {
  let minLength = 0;
  let sum = 0;
  let lengthOf = 0;
  for (var i = 0; sum < sub; i++) {
    sum += array[i];
    if (sum >= sub) {
      lengthOf = i + 1;
    }
  }
  if (lengthOf === 0) return 0;
  minLength = lengthOf;
  console.log("minLength", minLength);
  for (var i = lengthOf - 1; i < array.length; i++) {
    if (minLength === 1) {
      return 1;
    }
    let nextInc = i - minLength + 1;
    // if (i === lengthOf - 1) {
    //   sum -= array[i - minLength] - array[nextInc];
    // } else {
    sum += array[i] - array[i - minLength] - array[nextInc];
    // }

    console.log(sum, "sum");
    while (sum >= sub) {
      --minLength;
      ++nextInc;
      sum -= array[nextInc];
    }
    if (sum < sub) {
      sum += array[nextInc];
    }
  }
  return minLength;
}

// console.log(minSubArray([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArray([2, 1, 6, 5, 4], 9));
// console.log(minSubArray([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 9));
// console.log(minSubArray([4, 3, 3, 8, 1, 2, 3], 11));

// minLength -- 3
// now we're at 2
// testSum is NOT greater than 9
//
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// find longest substring with distinct values
function findLongestSubstring(string) {
  let start = 0;
  let end = 0;
  let longestSubstring = 0;
  let partialString = "";

  while (start < string.length && end < string.length) {
    if (partialString.includes(string[end])) {
      console.log("original start", start);
      console.log(
        "partialString.indexOf(string[end])",
        partialString.indexOf(string[end])
      );
      start = partialString.indexOf(string[end]) + start + 1;
      console.log("start", start);
      console.log("string[end]", string[end]);
      console.log("partialString", partialString);
      if (start === end) {
        end++;
      }
      partialString = string.substring(start, end);
    } else {
      end++;
      partialString = string.substring(start, end);
      longestSubstring = Math.max(partialString.length, longestSubstring);
    }
  }
  return longestSubstring;
}

// console.log(findLongestSubstring('aaabba'));
// console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring("thisisawesome"));

// t
// h
// i
// s
// i <-- what do we do here? -- we know we're at 4 -- jump to the index prior and look at 5?
// s
// a
// w
// e
// s
// o
// m
// e
// find index of and begin new window after?
// we will know that the longest substring so far is 4, so do we jump to the next interval?
//
