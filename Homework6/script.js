// 1.Have 2 functions validateName(which get argument some string and return true if it valid name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not empty)) and validateAge(get number argument and return true if value > 19 ).
// Create some functions by currying,so I can filter  list of users by valid name and age.
// (you can use compose or combine if need)
// users example -> usersList = [
// 	{
// 		name: ‘Test’,
// 		 info: {
// 			age: 51
// 		}
// 	}, {
// 		name: ‘Test Testovich’,
// 		 info: {
// 			age: 18
// 		}
// 	}, {
// 		name: Jon Testovich’,
// 		 info: {
// 			age: 21
// 		}
// 	}
//
// ]
//
//
let usersList = [
  {
    name: "Test",
    info: {
      age: 51
    }
  },
  {
    name: "Test Testovich",
    info: {
      age: 18
    }
  },
  {
    name: "Jon Testovich",
    info: {
      age: 21
    }
  }
];

function validateName(name) {
  let spaceIndex = name.indexOf(" ");
  let beforeSpaceIndex = spaceIndex - 1;
  let afterSpaceIndex = spaceIndex + 1;
  if (
    ~spaceIndex &&
    /[A-Za-z]/.test(name.slice(beforeSpaceIndex, spaceIndex)) &&
    /[A-Za-z]/.test(name.slice(spaceIndex + 1, afterSpaceIndex + 1))
  ) {
    return true;
  }
  return false;
}
function validateAge(age) {
  return age > 19;
}

function propGetter(key) {
  return function(object) {
    if (key === "age") {
      return object.info[key];
    }
    return object[key];
  };
}

function validate(propGetter, validator) {
  return elem => {
    return validator(propGetter(elem));
  };
}

let getValidatedName = validate(propGetter("name"), validateName);
let getValidatedAge = validate(propGetter("age"), validateAge);

let filteredUsers = usersList.filter(elem => {
  return getValidatedName(elem) && getValidatedAge(elem);
});
console.log(filteredUsers);

// 2.
// Make the following object iterable:
let todoList = {
  todoItems: [],
  addItem(description) {
    this.todoItems.push({ description, done: false });
    return this;
  },
  crossOutItem(index) {
    if (index < this.todoItems.length) {
      this.todoItems[index].done = true;
    }
    return this;
  }
};

todoList
  .addItem("task 1")
  .addItem("task 2")
  .crossOutItem(0);

let iterableTodoList = {};
iterableTodoList[Symbol.iterator] = function() {
  let properties = [...todoList.todoItems];
  let i = 0;
  return {
    next() {
      if (i < properties.length) {
        return { done: false, value: properties[i++] };
      }
      return { done: true, value: properties[i] };
    }
  };
};

for (let item of iterableTodoList) {
  console.log(item);
}

// 3.
// Determine the values logged to the console without running the code.
//  Instead of just writing down the values, formulate your thought process
// and explain to yourself how the code runs line by line.

let errorDemo = function*() {
  yield 1;
  throw "Error yielding the next result";
  yield 2;
};

let it = errorDemo();

// Execute one statement at a time to avoid
// skipping lines after the first thrown error.

console.log(it.next()); //{value:1,done:false}

console.log(it.next()); // Will throw an error

console.log([...errorDemo()]); // an error will be thrown

for (let element of errorDemo()) {
  console.log(element); // first will print 1, then error will be thrown on next next() call
}

// 4.
// Create an infinite sequence that generates the next value of the Fibonacci sequence.
// The Fibonacci sequence is defined as follows:
function* fibonacciNext(n) {
  let p1 = 0;
  let p2 = 1;
  for (;;) {
    let sum = p1;
    p1 = p2;
    p2 = sum + p1;
    yield sum;
  }
}

const getElem = fibonacciNext();
getElem.next();
getElem.next();
getElem.next();
getElem.next();

// 5.
// Create async generator function which will get 3 promise
// arguments and will yeald from latest to first finished
// promise values example -> for
// Promise1 -> (200ms, result: 15),
// Promise2 -> (600ms, result: 17),
// Promise3 -> (500ms, result: 42),

// result will be 17,42,15 .
const async1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(15);
  }, 200);
});
const async2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(17);
  }, 600);
});
const async3 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(42);
  }, 500);
});

async function* getPromises(...promises) {
  for (let i = 0, l = promises.length; i < l; i++) {
    yield await promises[i].then(res => res);
  }
}
const k = getPromises(async1, async2, async3);
console.log(k.next());
