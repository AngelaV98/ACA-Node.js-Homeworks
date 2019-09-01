// 1. What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7' ?
// c. '715','67'

// 2. Swap 2 variables.
// a. With third variable
  let a = 2, b = 3;
  let temp = a;
  a = b;
  b = temp;

// b. With arithmetic operators
  let a = 2, b = 3;
  a = a - b;
  b = a + b;
  a = b - a;

// 3. Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise
  a < 0 && "yes" || "no";

// 4. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
  !(a % b) && 1 || 0

// 5. Given three numbers. Find the maximum one
  (a > b) && (a > c && a || c)||(b > c && b || c)

// 6. Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’

let str = 'test';
let te = str.slice(0,2);
str.substring(0,2).concat(str.split('').reverse().join(''),str.slice(1, 3).repeat(4),str.slice(0,2),str.substring(1,4))
