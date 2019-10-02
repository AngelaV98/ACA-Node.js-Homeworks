// 1.
// promise.then(f1).catch(f2); vs promise.then(f1, f2); Is equivalent or not and why?(show example)

// Not equivalent
// The difference is: if an error occurs in f1 of .then in first case the f2 function of .catch will handle the error,
// in second case error won't be handled
let promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise
  .then(res => throw new Error("Error occured"))
  .catch(err => console.log(err));

promise.then(res => throw new Error("Error occured"), err => console.log(err));

// 2.

// Why catch not work and how to fix?

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

//catch doesn't work, because an Error is thrown in setTimeout and code execution is stopped, we must reject with that error

new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
}).catch(alert);

// 3.
// You have some 3 async functions.
// Need to create function which get that 3 functions and some callback
// in arguments and call that callback when last async function was
// ending and send that function returning data to callback.
// That 3 functions have 1 callback arguments
// Like ->                                      ??????????????????

function yourXFunction(async1, async2, async3, someCallback) {
  let count = 0;
  let arr = [...arguments];
  arr.pop();
  arr.forEach(elem => {
    console.log(count);
    if (count >= arr.length - 1) {
      elem(someCallback);
    }
    count++;
  });
}

const async1 = cb => {
  setTimeout(() => {
    cb(1);
  }, 14000);
};
const async2 = cb => {
  setTimeout(() => {
    cb(13);
  }, 16000);
};
const async3 = cb => {
  setTimeout(() => {
    cb(5);
  }, 13000);
};
const someCallback = val => val;
yourXFunction(async1, async2, async3, someCallback);

// 4.
// You have some 3 async Promises. create some function (like promise all,race ….)
// which will get promises and return some promise which will invoked on
// last finished promise time and will send that last returned value to
// resolve function, or reject some error on error case

const async1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 4000);
});
const async2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(13);
  }, 6000);
});
const async3 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(5);
  }, 3000);
});

function invokesAfterLastPromise(arr) {
  return new Promise(function(resolve, reject) {
    let count = 0;
    arr.forEach(elem => {
      elem
        .then(res => {
          if (count >= arr.length - 1) {
            resolve(res);
          }
          count++;
        })
        .catch(err => {
          reject(err);
        });
    });
  });
}
invokesAfterLastPromise([async1, async2, async3])
  .then(console.log)
  .catch(console.log);
