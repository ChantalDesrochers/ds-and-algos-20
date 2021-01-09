function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const letterCountReference = [...word1].reduce((reference, letter) => {
    reference[letter] = (reference[letter] || 0) + 1;
    return reference;
  }, {});

  for (let letter of word2) {
    if (letterCountReference[letter]) {
      letterCountReference[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram('test', 'estt'))
// console.log(validAnagram('bluecar', 'bluecat'))

function countUniqueValues(array) {
  let leadingPointer = 1;
  let trailingPointer = 0;

  while (leadingPointer < array.length) {
    if (array[leadingPointer] !== array[trailingPointer]) {
      trailingPointer += 1;
      array[trailingPointer] = array[leadingPointer];
      if (leadingPointer === array.length - 1) {
        trailingPointer += 1;
      }
    }
    leadingPointer += 1;
  }
  return trailingPointer;
}

// console.log(countUniqueValues([1,1,1,1,2,3,4,5]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([12,13,15,16]))
// console.log(countUniqueValues([2,2,2,2,3,4,5,5,6]))
// console.log(countUniqueValues([3,4,2,2,3,4,5,5,6]))

function averagePair(array, average) {
  if (!array.length) return false;
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let calcAverage = getAverage(array[start], array[end]);
    if (calcAverage === average) return true;
    if (calcAverage < average) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
}

function getAverage(n, m) {
  return (n + m) / 2;
}

// console.log(averagePair([1,2,3], 2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
// console.log(averagePair([-1,0,3,4,5,6], 4.1))
// console.log(averagePair([], 4))

function isSubsequence(str1, str2) {
  let oneIndex = 0;
  let twoIndex = 0;
  while (twoIndex < str2.length) {
    if (oneIndex === str1.length - 1) return true;
    if (str1[oneIndex] === str2[twoIndex]) {
      oneIndex += 1;
      twoIndex += 1;
    } else {
      twoIndex += 1;
    }
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))

function maxSubarraySum(nums, sub) {
  if (nums.length < sub) return null;
  let max = 0;
  let openWindow = 0;
  let finalMax = 0;

  while (openWindow < nums.length) {
    if (openWindow < sub) {
      max += nums[openWindow];
      finalMax = Math.max(finalMax, max);
      openWindow += 1;
    } else {
      max = max + nums[openWindow] - nums[openWindow - sub];
      openWindow += 1;
      finalMax = Math.max(finalMax, max);
    }
  }
  return finalMax;
}

// console.log(maxSubarraySum([100,200,300,400], 2))
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))

// function minSubArrayLen(array, target) {
// let sum = 0;
// let leading = 0;
// let trailing = 0;
// let minArray = Infinity;
//    while (leading < array.length) {
//        console.log('sum at the top, leading, trailing', sum, leading, trailing)
//        if (sum === target) {
//         //    console.log('in equal')
//         //    console.log('in equal - leading', leading)
//         //    console.log('in equal - trailing', trailing)
//            minArray = Math.min(minArray, leading - trailing);
//         //    leading += 1;
//         //    trailing += 1;
//         console.log(leading, 'leading')
//         console.log(array[leading], 'arrayleading')
//         console.log(array[trailing], 'arraytrailing')
//         console.log(sum, 'sum')
//            sum = sum + array[leading] - array[trailing];
//            if (sum > target) {
//                trailing += 1;
//            } else {
//                leading += 1;
//            }
//         //    console.log('sum in equal', sum)
//         } else if (sum < target) {
//             // console.log('in less than')
//             sum += array[leading];
//             // console.log('sum in less than', sum)
//             leading += 1;
//         } else {
//             console.log(array[trailing], 'in final array trailing')
//             // console.log('in greater')
//             sum -= array[trailing];
//             // console.log('sum in greater than', sum)
//             trailing += 1;
//        }
//    }
//    return minArray;
// }
function minSubArrayLen(array, target) {
  let sum = array[0];
  let leading = 0;
  let trailing = -1;
  let minArray = Infinity;
  while (leading < array.length) {
    if (sum === target) {
      minArray = Math.min(minArray, leading - trailing);
      trailing += 1;
      if (leading < array.length) {
        leading += 1;
      }
      sum = sum + array[leading] - array[trailing];
    } else if (sum < target) {
      console.log("in first if", sum);
      leading += 1;
      sum += array[leading];
    } else {
      console.log("in second if", sum);
      trailing += 1;
      sum -= array[trailing];
    }
  }
  return minArray;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
