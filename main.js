// 1
const sum = function (a, b) {
  // TODO: Your code here
  let sum1 = a + b;
  return sum1;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

// 2
const average = function (a, b) {
  // TODO: Your code here

  let avg = a + b;
  avg /= 2;
  return avg;
};

average(20, 5); // => 12.5
average(10, 20); // => 15

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
round(5); // => 5
round(2.4); // => 2
round(0.8); // => 1
round(1.7); // => 12

// 5

const toThePowerOf = function (base, exponent) {
  // TODO: Your code here
  return Math.pow(base, exponent);
};

toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81

//   6

const randomNumber = function () {
  // TODO: Your code here

  return Math.random();
};

randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673
randomNumber(); // => 0.43265697184952523

//   7
const oneOrZero = function () {
  // TODO: Your code here

  let x = Math.random();
  x = Math.round(x);
  return x;
};

oneOrZero(); // => 1
oneOrZero(); // => 1
oneOrZero(); // => 0

//   8
const randomRange = function (number) {
  // TODO: Your code here
  let x = Math.random() * 10;
  x = Math.round(x);
  return x;
};

// 10 and 0 are included
randomRange(10); // => 10
randomRange(10); // => 7
randomRange(10); // => 1
randomRange(10); // => 0

// 9

function includeOf(string, character) {
    // TODO: Your code here
    for (let i = 0; i < string.length; i++) {

        if (string[i] === character) {
           
            console.log(true);
        }
    }
}
includeOf("Hello", "h"); // => false
includeOf("hello", "h"); // => true
includeOf("hello", "a"); // => false
includeOf("World", "r"); // => true
includeOf("World", "a"); // => false
