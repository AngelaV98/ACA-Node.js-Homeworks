// 1.
//    a. Print all numbers between 1 and 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//    b. Print all numbers between 1 and 10 except 6.
for (let i = 1; i <= 10; i++) {
  if (i != 6) {
    console.log(i);
  }
}
//    c. Print all even numbers between 1 and 10.
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
//    d. Calculate sum of all numbers between 1 and 10 (using loop).
{
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
}

//    e. Calculate sum of all numbers between 1 and 10 except 8.
{
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    if (i != 8) {
      sum += i;
    }
  }
  console.log(sum);
}

//    f. Calculate sum of all odd numbers between 1 and 10
{
  let sum = 0;
  for (let i = 1; i <= 10; i += 2) {
    sum += i;
  }
  console.log(sum);
}

//    g. Calculate sum of squares of all numbers between 1 and 10.
{
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i * i;
  }
  console.log(sum);
}

// 2. Insert a digit and a number. Check whether the digit contains in the number or not.
function digitIsContained(digit, number) {
  let d = (digit < 0 && -digit) || digit;
  let num = (number < 0 && -number) || number;
  while (num) {
    let last = num % 10;
    if (last === d) {
      return true;
    }
    num = parseInt(num / 10, 10);
  }
  return false;
}

console.log(digitIsContained(5, 2463));
console.log(digitIsContained(4, 6));
console.log(digitIsContained(8, 45689));

// 3. Enter a number. Reverse its first and last digits. Print the new number.
function reverseFirstAndLast(number) {
  let num = number;
  let sign = false;
  if (num >= -9 && num <= 10) {
    return num;
  } else if (num < -9) {
    sign = true;
  }
  num = (num < 0 && -num) || num;
  let last = num % 10;
  let count = 0;
  let mid = 0;
  let i = 1;
  while (num / 10 > 9) {
    num = parseInt(num / 10, 10);
    mid += parseInt(num % 10, 10) * 10 ** i;
    i++;
    count++;
  }
  count += 2;
  let first = parseInt(num / 10 ** (count - 1, 10), 10);
  let newNum = last * 10 ** (count - 1) + mid + first;
  return (sign && -newNum) || newNum;
}
console.log(reverseFirstAndLast(2));
console.log(reverseFirstAndLast(13));
console.log(reverseFirstAndLast(895796));

// 4. Enter a number. Find the difference between its biggest and smallest digits.
function differenceBtwMaxMin(num) {
  let n = (num < 0 && -num) || num;
  let max = n % 10,
    min = n % 10;
  n = parseInt(n / 10);
  while (n) {
    if (max < n % 10) {
      max = n % 10;
    }
    if (min > n % 10) {
      min = n % 10;
    }
    n = parseInt(n / 10, 10);
  }

  return max - min;
}

console.log(differenceBtwMaxMin(5));
console.log(differenceBtwMaxMin(152));
console.log(differenceBtwMaxMin(4593653));

// 5. Insert a number. Print 'yes' if the number is prime, 'no' otherwise.
function isPrime(num) {
  let n = (num < 0 && -num) || num;
  let b = true;
  if (n === 0 || n === 1) {
    return "no";
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      b = false;
      break;
    }
  }
  return (b && "yes") || "no";
}

console.log(isPrime(401));
console.log(isPrime(63));

// 6. Given a number n (n>0). Print Fibonacci series up to n.
function fibN(n) {
  let p1 = 0,
    p2 = 1,
    str = `${p1}`,
    sum = p1 + p2;

  while (sum < n) {
    str += ` ${sum}`;
    sum = p1 + p2;
    p1 = p2;
    p2 = sum;
  }
  return str;
}
console.log(fibN(7));
console.log(fibN(45));

// 7. Write a recursive function to determine whether all digits of the number are odd or not

function allDigitsAreOdd(num) {
  let n = (num < 0 && -num) || num;
  if (n >= 0 && n <= 9 && n % 2 != 0) {
    return true;
  }
  if ((n % 10) % 2 != 0) {
    return allDigitsAreOdd(parseInt(n / 10));
  }
  return false;
}

console.log(allDigitsAreOdd(4211133));
console.log(allDigitsAreOdd(7191));
console.log(allDigitsAreOdd(5));

// 8. Write a function that accepts a string(a sentence) as a parameter and
// finds the longest word within the string․If there are several words which
//are the longest ones, print the last word(words can be separated by space,
//comma or hyphen).

function getLongestWord(s) {
  let str = s.split(" ");
  let strLen = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i][str[i].length - 1] === ",") {
      str[i] = str[i].replace(",", " ");
      str[i] = str[i].trim();
    }
    strLen.push(str[i].length);
  }
  let max = strLen[0],
    k = 0;
  for (let i = 0; i < strLen.length; i++) {
    if (strLen[i] >= max) {
      max = strLen[i];
      k = i;
    }
  }

  return str[k];
}

console.log(
  getLongestWord(
    "A revolution without dancing is a revolution not worth having."
  )
);
console.log(
  getLongestWord(
    "Which would be worse - to live as a monster, or to die as a good man?"
  )
);

// 10. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even.
//    The numbers obtained should be printed in a comma-separated sequence on a single line.

function eachDigitIsEven(n) {
  let k = true;
  while (n) {
    if ((n % 10) % 2 !== 0) {
      k = false;
      break;
    }
    n = parseInt(n / 10, 10);
  }
  return k;
}
function evensBetween2(a, b) {
  let str = "";
  for (let i = a; i <= b; i++) {
    if (eachDigitIsEven(i)) {
      str += `${i}, `;
    }
  }
  str = str.trim();
  return str || "Such numbers does not exist.";
}

console.log(evensBetween2(19, 42));
console.log(evensBetween2(99, 199));

// 9. Write a function to find longest substring in a given a string without repeating characters except space character.
//    If there are several, return the last one. Consider that all letters are lowercase.  ????

function hasDuplicates(s) {
  let str = s.split("");
  let b = false;
  for (let j = 0; j < str.length; j++) {
    if (str.indexOf(str[j]) !== str.lastIndexOf(str[j])) {
      b = true;
      break;
    }
  }
  return b;
}

function longestSubStr(s) {
  let str = s.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let sbstr = s.substring(i, j).trim();
      if (!hasDuplicates(sbstr) && !arr.includes(sbstr)) {
        arr.push(sbstr);
      }
    }
  }
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  return arr[arr.length - 1];
}
console.log(longestSubStr("parting your soup is not a miracle, bruce"));
console.log(
  longestSubStr(
    "there are no two words in the english language more harmful than 'good job'."
  )
);
