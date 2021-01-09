function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));

// given two strings, determine if one string is an anagram of the other
function anagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  // create empty objects
  let string1Characters = {};

  // create first counter
  for (let char of string1) {
    string1Characters[char] = ++string1Characters[char] || 1;
  }
  // compare the obj w string2
  for (let letter of string2) {
    if (!string1Characters[letter]) {
      return false;
    } else {
      string1Characters[letter] -= 1;
    }
  }
  return true;
}

// console.log(anagram('cattfsihd', 'fishcattd'));
// console.log(anagram('cattfsihsd', 'fishcattdf'));

function sameFrequency(number1, number2) {
  let reference = {};
  let stringifiedNumber = number1.toString();
  let stringifiedNumber2 = number2.toString();
  if (stringifiedNumber.length !== stringifiedNumber2.length) return false;

  for (let digit of stringifiedNumber) {
    reference[digit] = ++reference[digit] || 1;
  }

  for (let digit of stringifiedNumber2) {
    if (!reference[digit]) {
      return false;
    }
    --reference[digit];
  }
  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(1823, 281));
// console.log(sameFrequency(1223, 2281));
// console.log(sameFrequency(12233, 32231));

function areThereDuplicates(...args) {
  let reference = {};
  for (let argument of args) {
    if (reference[argument]) {
      return true;
    }
    reference[argument] = 1;
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 2));
