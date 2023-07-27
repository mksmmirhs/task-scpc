// task 1
function strReverse(str) {
  let reverse = '';
  for (let letter of str) {
    reverse = letter + reverse;
  }
  return reverse;
}

// task 2

function positiveSum(arr) {
  const sum = arr.reduce((previous, current) => {
    if (current > 0) {
      return current + previous;
    } else {
      return previous;
    }
  }, 0);
  return sum;
}

// task 3

function frequentNumber(arr) {
  const frequency = {};
  for (let number of arr) {
    if (number in frequency) {
      frequency[number] += 1;
    } else {
      frequency[number] = 1;
    }
  }
  let max = 0;
  for (let keys in frequency) {
    if (frequency[keys] > max) {
      max = frequency[keys];
    }
  }
  for (let key in frequency) {
    if (frequency[key] === max) {
      return parseInt(key);
    }
  }
}

// task 4

function findIndex(arr, target) {
  const targetedNumbers = [];
  for (let item of arr) {
    const sub = target - item;
    for (let number of arr) {
      if (number === sub) {
        if (arr.indexOf(number) - arr.indexOf(item) === 1) {
          targetedNumbers.push(arr.indexOf(item));
          targetedNumbers.push(arr.indexOf(number));
        }
      }
    }
  }
  return targetedNumbers;
}

// task 5
function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
  console.log(operator);
}

//task 6
function generateRandomPassword(length) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// task 7

function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentNumeralValue = romanNumerals[roman[i]];
    const nextNumeralValue = romanNumerals[roman[i + 1]];

    if (nextNumeralValue > currentNumeralValue) {
      result += nextNumeralValue - currentNumeralValue;
      i++;
    } else {
      result += currentNumeralValue;
    }
  }

  return result;
}

// task 8

function secondHighest(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr[1];
}
