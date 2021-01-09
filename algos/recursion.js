function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(3))
// console.log(factorial(10))
// console.log(factorial(4))

// helper method recursion 
function collectOddValues(arr) {
  let oddsArray = [];

  function helper(inputArray) {
    if (inputArray.length === 0) return;

    if (inputArray[0] % 2 !== 0) oddsArray.push(inputArray[0])

    helper(inputArray.slice(1));
  }

  helper(arr);

  return oddsArray;
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,4,3]))

// pure recursion
function collectOddValuesR(arr) {
  let oddsArray = [];

  if (arr.length === 0) return oddsArray;

  if (arr[0] % 2 !== 0) oddsArray.push(arr[0]);

  oddsArray = [...oddsArray, ...collectOddValuesR(arr.splice(1))];
  // oddsArray = oddsArray.concat(collectOddValuesR(arr.splice(1)));
  return oddsArray;
}

console.log(collectOddValuesR([1,2,3,4,5,6,7,8,4,3]))

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

// console.log(power(2,0));
// console.log(power(2,2));
// console.log(power(2,4));

// 2, 2
// 2 * 2

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));

function recursiveRange(number) {
  if (number === 0) return 0;

  return number + recursiveRange(number - 1);
}

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));

function fib(nth){
  if (nth < 3) return 1;

  let fibNumbers = [1, 1];

  function helper(nth) {
    if (nth === 0) return;
    let fibCalculation = fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2];

    fibNumbers.push(fibCalculation);
    helper(nth - 1);
  }

  helper(nth - 2);

  return fibNumbers[fibNumbers.length - 1];
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
// FIRST
// nth = 3
// fibNumber = 1
// 1 + 1 = 2
// SECOND
// nth = 2
// fibNumber = 2
// 2 + 


function fib2(n){
  if (n <= 2) return 1;
  return fib2(n-1) + fib2(n-2);
}

// fib(2) + fib(1)
// 1 + 1 = 2