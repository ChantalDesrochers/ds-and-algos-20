function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// console.log(linearSearch([1, 4, 2, 65, 43, 9], 99));

function binarySearch(array, value) {
  let end = array.length - 1;
  let start = 0;
  while (end > start) {
    let pointer = Math.ceil((start + end) / 2);
    if (array[pointer] === value) return pointer;
    if (array[pointer] < value) {
      start = pointer + 1;
    } else {
      end = pointer - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 4, 5, 6, 8, 9, 12, 20], 40));


// function naiveSearch(largerString, shorterString) {
//   let count = 0;

//   for (let i = 0; i < largerString.length; i ++) {
//     let whileIndex = 0;
//     while (largerString[i + whileIndex] === shorterString[whileIndex] && (i + whileIndex < largerString.length)) {
//       whileIndex++;
//     }
//     if (whileIndex === shorterString.length) {
//       count++;
//     }
//   }
//   return count;
// }

function naiveSearch(largerString, shorterString) {
  let count = 0;

  for (let i = 0; i < largerString.length; i ++) {
    for (let j = 0; j < shorterString.length; j++) {
      if (shorterString[j] !== largerString[i + j]) {
        break;
      }
      if (j === shorterString.length - 1) count++;
    }
  }
  return count;
}

// console.log(naiveSearch('abcdogefgdog', 'dog'));


// kmpStringSearch() {

// }

// function buildPatternTable(pattern) {
//   let prefix = 0;
//   let suffix = 1;
//   let patternArray = [0];
//   while (suffix < pattern.length) {
//     if (pattern[prefix] === pattern[suffix]) {
//       patternArray.push(prefix + 1);
//       prefix++;
//       suffix++;
//     } else {
//       patternArray.push(0);
//       suffix++;
//     }
//   }
//   return patternArray;
// }

function kmpStringSearch(string, pattern) {
  const patternTable = [...buildPatternTable(pattern)];
  let patternIndex = 0;
  let count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] === pattern[patternIndex]) {
      patternIndex++;
    } else if (patternIndex === 0) {
        patternIndex = 0;
    } else {
        patternIndex = patternTable[patternIndex - 1];
      }
    if (patternIndex === pattern.length -1) count ++;
  }
  return count;
}

console.log(kmpStringSearch('wdabddabdabsd', 'abdab'));
// [0,0,0,1,2]

// w === a ? NO --> patternIndex = 0
// d === a ? NO --> patternIndex = 0
// a === a ? YES --> patternIndex = 1
// b === b ? YES --> patternIndex = 2
// d === d ? YES --> patternIndex = 3
// d === d ? NO --> patternIndex = 0
//

function buildPatternTable(pattern) {
  let prefix = 0;
  let suffix = 1;
  let patternArray = [0];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[prefix] === pattern[suffix]) {
      patternArray.push(prefix + 1);
      prefix++;
      suffix++;
    } else if (prefix === 0) {
      patternArray.push(0);
      suffix++;
    } else {
      const precedingPosition = patternArray[prefix - 1];
      prefix = precedingPosition;
    }
  }
  return patternArray;
}
// function buildPatternTable(word) {
//   const patternTable = [0];
//   let prefixIndex = 0;
//   let suffixIndex = 1;

//   while (suffixIndex < word.length) {
//     if (word[prefixIndex] === word[suffixIndex]) {
//       patternTable[suffixIndex] = prefixIndex + 1;
//       suffixIndex += 1;
//       prefixIndex += 1;
//     } else if (prefixIndex === 0) {
//       patternTable[suffixIndex] = 0;
//       suffixIndex += 1;
//     } else {
//       prefixIndex = patternTable[prefixIndex - 1];
//     }
//   }

//   return patternTable;
// }

// console.log(buildPatternTable('abccabc'));
// [0,0,0,3,1,2,3];
// [0,0,0,0,1,2,3];
// console.log(buildPatternTable('abcdabca'));
// [0, 0, 0, 0, 1, 2, 3, 1]
// console.log(buildPatternTable('ddabdabddab'));
// [0,1,0,0,1,3,4,1,2,3,4]
// console.log(buildPatternTable('aasdfgklsksdfg'));


function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      // We've found a match.
      if (wordIndex === word.length - 1) {
        return (textIndex - word.length) + 1;
      }
      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }
  }

  return -1;
}




console.log(knuthMorrisPratt('wdabddabdabsd', 'abdab'));