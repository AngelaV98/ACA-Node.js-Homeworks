// 1.
// Write a function, which receives an array as an argument which elements
// arrays of numbers. Find biggest negative number of each array.
//  Return product of that numbers.If there is not any negative number
//  in an array, ignore that one. Check that items of the given array are
//  arrays.
function findNegativeMax(arr) {
  let max;
  let count = 0;
  arr.forEach(elem => {
    if (elem < 0) {
      if (count === 0 && elem < 0) {
        max = elem;
        count++;
      }
      if (elem < 0 && count > 0) {
        if (elem > max) {
          max = elem;
        }
      }
    }
  });
  return typeof max === "undefined" ? count : max;
}

function productOfNegatives(arr) {
  let arr1 = [];
  let k = false;
  let t = false;
  let reducer = arr.reduce((accumulator, currentVal) => {
    if (Array.isArray(currentVal)) {
      let max = findNegativeMax(currentVal);
      if (max) {
        t = true;
        return accumulator * max;
      } else {
        return accumulator * 1;
      }
    } else {
      k = true;
      return accumulator * 1;
    }
  }, 1);
  return k ? "Invalid Argument" : t ? reducer : "No negatives";
}
console.log(productOfNegatives([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]));
console.log(productOfNegatives([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(productOfNegatives([1, 2, 3]));

// 2.
// Given an array of strings and numbers.
// Print the number of integers and the number of strings in the array.

function countOfStringsAndNumbers(arr) {
  let countNumbers = 0;
  let countStrings = 0;
  arr.filter(elem => {
    if (typeof elem === "number") {
      return countNumbers++;
    }
    return countStrings++;
  });

  return `Numbers: ${countNumbers}, Strings: ${countStrings}`;
}

console.log(countOfStringsAndNumbers([1, "10", "hi", 2, 3]));
console.log(countOfStringsAndNumbers([1, 4, "i am a string", "456"]));

// 3.
// Given an array consisting from the arrays of numbers
// (like a two-dimensional array).
// Find sum of each row and print them as an array.

function sumOfRows(arr) {
  let newArr = arr.map(elem => {
    let reducer = elem.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return reducer;
  });
  return newArr;
}

console.log(sumOfRows([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(sumOfRows([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]));
console.log(sumOfRows([[1], [2], [3], [4]]));
// 4. Given an array of integers.
// Write a function that return new array from first array,
//  where  removed even numbers,
// and odd numbers was multiplied with new array length

function modifiedArray(arr) {
  let odds = arr.filter(elem => elem % 2 !== 0);
  let len = odds.length;
  let newArr = odds.map(elem => elem * len);

  return newArr;
}

console.log(modifiedArray([5, 4, 78, 0, -3, 7]));
console.log(modifiedArray([2, 4, 6, 88]));
console.log(modifiedArray([]));

// 5.Given an array of numbers. Create an array containing only elements once.

function removeDuplicates(arr) {
  let newArr = arr.filter((elem, i) => {
    return arr.indexOf(elem) === i;
  });
  return newArr;
}
console.log(removeDuplicates([1, 2, 3, 3, 2, 5]));
console.log(removeDuplicates([4, 4]));

// 6.Given an array.
//  Create the array which elements are products between two neighbours.
function neighboursProducts(arr) {
  let newArr = arr.map((elem, i) => {
    return arr[i - 1] * elem;
  });
  newArr.shift();
  return newArr;
}

console.log(neighboursProducts([3, 7, 12, 5, 20, 0]));
console.log(neighboursProducts([1, 1, 4, 32, 6]));

// 7. Given an object. Invert it (keys become values and values become keys).
// If there is more than key for that given value create an array.

function invertedObject(obj) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(obj[key])) {
      let temp = key;
      key = obj[key];
      obj[key] = temp;
      delete obj[obj[key]];
    } else {
      let temp = [...obj[obj[key]]];
      obj[obj[key]] = [...temp, key];
      delete obj[key];
    }
  }
  return obj;
}
console.log(invertedObject({ a: "1", b: "2" }));
console.log(invertedObject({ a: "1", b: "2", c: "2" }));
console.log(invertedObject({ a: "1", b: "2", c: "2", d: "2" }));

// 8 .Given an object. Write a function that creates a deep copy of it.

function deepCopy(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
    } else {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

var a = { a: "1", b: { a: 2 } };
var b = deepCopy(a);
a.b.a = 123;

console.log(b.b.a !== 123);
