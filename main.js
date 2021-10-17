// 1
const sum = function (a, b) {
  // TODO: Your code here
  let sum1 = a + b;
  return sum1;
};

// 2
const average = function (a, b) {
  // TODO: Your code here

  let avg = a + b;
  avg /= 2;
  return avg;
};

//   3
/*  
   5! = 5 * 4 * 3 * 2 * 1
 */

const findFactorial = function (num) {
  // YOUR CODE HERE
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * findFactorial(num - 1);
  }
};

// 4

const round = function (number) {
  // TODO: Your code here
  let round1 = Math.round(number);
  return round1;
};

// 5

const toThePowerOf = function (base, exponent) {
  // TODO: Your code here
  return Math.pow(base, exponent);
};

//   6

const randomNumber = function () {
  // TODO: Your code here

  return Math.random();
};

//   7
const oneOrZero = function () {
  // TODO: Your code here

  let x = Math.random();
  x = Math.round(x);
  return x;
};

//   8
const randomRange = function (number) {
  // TODO: Your code here
  let x = Math.random() * 10;
  x = Math.round(x);
  return x;
};

// 9

function includeOf(string, character) {
  // TODO: Your code here
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      console.log(true);
    }
  }
}

// ------------------------------------------Array---------------------------

// 1
const addToArray = function (array, string) {
  // TODO: Your code here
  const x = [];
  x.push(array, string);

  return x;
};

// 2

const convertToString = function (array) {
  // TODO: Your code here
  let text = array.join();
  return text;
};

//   3

// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, index, value) {
  // TODO: Your code here
  if (index > array.length - 1) {
    console.log(`there is no element to updated in this index`);
  } else {
    let x = array.splice(index, 1, value);

    return array;
  }
};

//   4

const onlyString = function (array) {
  // TODO: Your code here

  let x = [];
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      x.push(array[index]);
    }
  }
  return x;
};

// 5

const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  // TODO: Your code here
  let res = "Login Failed"
   for (let index = 0; index < users.length; index++) {
       
    if (users[index].includes(username) && users[index].includes(password)) {
        res = "login succes"
        
    }
       
   } return res;
};

//   6

const maximumNumber = function (numbers) {
  // TODO: Your code here
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0];
};

//   7

const reversString = function (string) {
  // TODO: Your code here

  var splitString = string.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
};
