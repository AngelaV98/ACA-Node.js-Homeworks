// 1.
// Swap 2 variables.
// With third variable
// With arithmetic operators (1 point)
let a = 1,
  b = 2;
let temp = a;
a = b;
b = temp;

let a = 1,
  b = 2;
a = a - b;
b = a + b;
a = b - a;

// 2.
// Given three numbers. Find the maximum one (Only use &&, || and comparison operators) (2 points)

(a > b && a > c && `${a}`) || (b > c && `${b}`) || `${c}`;

// 3.
// Given an array of integers. Write a function that returns a new array containing only odd numbers
// multiplied with new array length (2 points)

function oddArrayMultipliedWithLength(arr) {
  let odds = arr.filter(elem => elem % 2 !== 0);
  let len = odds.length;
  let newArr = odds.map(elem => elem * len);
  return newArr;
}

console.log(oddArrayMultipliedWithLength([5, 4, 78, 0, -3, 7]));
console.log(oddArrayMultipliedWithLength([2, 4, 6, 88]));
console.log(oddArrayMultipliedWithLength([]));

// 4.   ??/
//  Given an array of integers.
// Write a function which will get that array
//  and create new array, with size equal to first
//  positive element of given array (If no positive
// element return []) and content of returned array
// will be next elements of given array (repeated, if needed)
// .(2 points)

function positiveElementLengthArray(arr) {
  let newArr = [...arr];
  let posElem;
  let posIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posElem = arr[i];
      posIndex = i;
      break;
    }
  }
  if (typeof posElem === "undefined") {
    return [];
  }
  newArr.splice(posIndex);
  let counter = 0;
  while (newArr.length <= posElem - 1) {
    for (let i = posIndex + 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    counter++;
  }
  newArr.length = posElem;
  return newArr;
}
positiveElementLengthArray([8, -9, 21]);
console.log(positiveElementLengthArray([8, -9, 21]));
console.log(positiveElementLengthArray([2, 4, 6, 88]));
console.log(positiveElementLengthArray([-5, 4, 78, 0, -3, 7]));
console.log(positiveElementLengthArray([]));
console.log(positiveElementLengthArray([-5, 4]));

// 5.
// Given an array of integers. Write a function which will get that
// array and return an object with 2 properties even6 and odd7. Values of that properties will be
// even6-> array of all positive numbers that are divisible by 6
// odd7-> array of all positive odd numbers that are divisible by 7 (1 point)

function modifiedObject(arr) {
  let obj = {
    even6: [],
    odd7: []
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] % 6 === 0) {
        obj.even6.push(arr[i]);
      } else if (arr[i] % 2 != 0 && arr[i] % 7 === 0) {
        obj.odd7.push(arr[i]);
      }
    }
  }
  return obj;
}

//6.
// Create User class.
// User needs to have name (a string containing only letters),
// age (a number in the range [0, 200]) and birthdate (only date type),
// validate that properties by getters and setters.original property names need to be private
// (do it using Symbol)
//  Create User class.
// User needs to have name (a string containing only letters),
// age (a number in the range [0, 200]) and birthdate (only date type),
// validate that properties by getters and setters.original property names need to be private
// (do it using Symbol)

let name = Symbol();
let age = Symbol();
let birthdate = Symbol();

class User {
  constructor(name, age, birthdate) {
    this.name = name;
    this.age = age;
    this.birthdate = birthdate;
  }

  get name() {
    return this[name];
  }

  set name(val) {
    let arr = val.split("");
    let b = arr.every(elem => {
      return (
        (elem.charCodeAt() >= 65 && elem.charCodeAt() <= 90) ||
        (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122)
      );
    });
    if (b) {
      this[name] = val;
    } else {
      throw new Error("Invalid value");
    }
  }

  get age() {
    return this[age];
  }

  set age(val) {
    if (val > 0 && val < 200) {
      this[age] = val;
    } else {
      throw new Error("Invalid value");
    }
  }
  get birthdate() {
    return this[birthdate];
  }
  set birthdate(val) {
    if (val instanceof Date) {
      this[birthdate] = val;
    } else {
      throw new Error("Invalid value");
    }
  }
}

// 7) What is the difference ?
// ------------------------------------------------------
// 1->
function User(name) {
  this.name = name;
  this.printName = function() {
    console.log(this.name);
  };
}
// -------------------------------------------------------
// 2->
function User(name) {
  this.name = name;
}

User.prototype.printName = function() {
  console.log(this.name);
};
// -------------------------------------------------------------
//  (1 point)

// in 1 case the printName property is added to the object that creates constructor function
// if we create new instances from User for every instance will be created printName property
// in 2 case the printName property is added to the User.prototype
// it is created once, and if we create instance from class they will have reference to printName

// 8) Write a User function constructor which will add name and age properties into object.
//  Create Player function constructor, which will extend from User and will have own specific
//   method play which will log string “Player player_name is playing”.
// (2 points)

function User(name, age) {
  this.name = name;
  this.age = age;
}
function Player() {}

Player.prototype = Object.create(User.prototype);
Player.prototype.constructor = Player;

Player.prototype.play = function() {
  console.log("Player player_name is playing");
};

// 9) Implement 8 using classes.
//  Add static property counter on Player,
// which will count how many instances of Player class were created.
//  (1 point)

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Player extends User {
  static count = 0;
  constructor(...props) {
    super(...props);
    this.count++;
  }
  play() {
    console.log("Player player_name is playing");
  }
}

// 10) Given functions

function dbGetEmployee(id, callback) {
  setTimeout(_ => {
    console.log(`Getting ${id}`);
    const employees = [
      { id: 1, name: "John", headId: 3 },
      { id: 2, name: "Ann", headId: 3 },
      { id: 3, name: "Jack", headId: 4 },
      { id: 4, name: "Tom", headId: 6 },
      { id: 5, name: "Sarah", headId: 6 },
      { id: 6, name: "Nick", headId: 7 },
      { id: 7, name: "Lisa", headId: null }
    ];

    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      callback(null, employee);
      return;
    }
    callback(new Error(`Employee doesn't exist`));
  }, 2000);
}

function printHeadOfHead(id) {
  dbGetEmployee(id, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    dbGetEmployee(res.headId, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      dbGetEmployee(res.headId, (err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(res);
      });
    });
  });
}

// Write wrapper function dbGetEmployeeWrapper which will call dbGetEmployee and return a promise.
// Rewrite function printHeadOfHead to be promise based.
// Rewrite function printHeadOfHead to be async/await based.
// (3 points)

function dbGetEmployeeWrapper(id) {
  dbGetEmployee(id)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
}

function printHeadOfHeadPromise(id) {
  return new Promise(function(reject, resolve) {
    dbGetEmployee(id)
      .then((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
      .then((err, res) => {
        dbGetEmployee(res.headId)
          .then((err, res) => {
            if (err) {
              reject(err);
            }
            resolve(res);
          })
          .then((err, res) => {
            if (err) {
              reject(err);
            }
            resolve(res);
          });
      });
  });
}

async function printHeadOfHeadAsync(id) {
  let res = await dbGetEmployee(id);
  let res1 = await dbGetEmployee(res.headId);
  let res2 = await dbGetEmployee(res1.headId);
  console.log(res2);
}

// 11) Write a generator named arithmeticProgression which takes 2 parameters:
//  firstElement, delta and generates an arithmetic sequence of numbers such that
// the difference of any two successive members of the sequence is a constant (delta). So that

function* arithmeticProgression(firstElement, delta) {
  for (let i = 0; ; i++) {
    yield firstElement + i * delta;
  }
  return;
}
const ap = arithmeticProgression(5, 3);
let a1 = ap.next(); // 5
let a2 = ap.next(); // 8
let a3 = ap.next(); // 11
let a4 = ap.next(); // 14
