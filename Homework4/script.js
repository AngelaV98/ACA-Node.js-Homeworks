// 1.
// Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have a toString method
// Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have a toString method

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  toString() {
    return `object Rectangle {length:${this.length},width:${this.width}}`;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }
}

let rect = new Rectangle(2, 3);
console.log(rect.getArea());
console.log(rect.getPerimeter());
console.log(rect.toString());

// 2.
// Create an object called shape that has the type property and a getType() method.
// Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three properties — a, b, and c, representing the lengths of the sides of a triangle.
// Add a new method to the prototype called getPerimeter()

// > var t = new Triangle(1, 2, 3);
// > t.constructor === Triangle;

// true
// > shape.isPrototypeOf(t);
//         true
// > t.getPerimeter();
//        6
// > t.getType();

// "triangle"

const shape = {
  type: "triangle",
  getType() {
    return this.type;
  }
};
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

var t = new Triangle(1, 2, 3);
t.constructor = Triangle;
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

// 3.
// Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have getters.
// It should have a toString method.

// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  toString() {
    return `Author {${this.name}, ${this.email}, ${this.gender}}`;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }

  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author.name;
    this.price = price;
    this.quantity = quantity;
  }

  toString() {
    return `Book{${this.title}, ${this.author}, ${this.price},${
      this.quantity
    }}`;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
}
let author = new Author("Herman Hesse", "hesse@gmail.com", "male");
let book = new Book("Steppenwolf", author, 5000, 1000);

// 4.
// What is output and why?

// function test (name) {
//    this.fullName = `My name is ${name}`
//    this.age = 5;
//    return this.age;
// }
// 	a )new test(’Some Name’);
// 	b)  test('Some Name’)

// a) - object, because the constructor makes new object because of new keyword and returns it
// b) - 5, because the test function will be called and it returns age with value 5

// 5.
//  What is output and why?

// function test (name) {
//    this.fullName = `My name is ${name}`
//    this.age = 5;
//    return {
//        age: this.age
//    };
// }

// 	a )new test(’Some Name’);
// 	b)  test('Some Name’)

//same as before
//a) - constructor will create a new object {fullName: `My name is Some Name`,age:5 } and return it
//b) - function will return {age: 5}

// 6.
// What will be the output of the following code and why?

// var Animal = function (name, type) {
//    this.kind = name,
//        this.breed = type
// }

// var playground = {
//    animals: [],

//    addAnimal(animal) {
//        this.animals.push(animal);
//    },

//    listAnimalKind(kind) {
//        this.animals.forEach(function (animal) {
//            if (animal.kind == kind) {
//                console.log(animal.breed);
//            }
//        });
//    }
// }

// playground.addAnimal(new Animal('dog', 'Labrador'));
// playground.addAnimal(new Animal('dog', 'Goldren Retriever'));
// playground.addAnimal(new Animal('rabbit', 'Angola'));
// playground.listAnimalKind('dog');

// Labrador
// Golden Retriever
//because we pass the type dog to listAnimalKind method, then run foreach on animals array that contains Animal instance objects that we created
//if statement will be true in case of first and second animal(their type is dog)
//and then we console.log the breed of first and second objects

// 7.
// Write Car class, which have
// properties:
// 	static finishPosition: number
// 	name: string,
// 	 color: string(hashcode of color),
// 	 currentPosition: number(on start it equal to 0),
// 	 intervalPinter: number(setInterval pointer, that need for stopping interval)
// 	 speed: number(ex. 10, it means car can go 10px for 1 second),
// methods:
// 	reset() -> it will reset currentPosition to 0
// 	start() -> it should update currentPosition value by speed each 300ms(with setInterval) and log it to console, if currentPosition equal or more then finishPosition, then call stop method
// 	stop() -> will stop interval and log`[name] car was finished`

// set some finishPosition value for Car
// create 3 Cars with different parameters
// create function that will start car competition

class Car {
  static finishPosition = 200;

  constructor(name, color, intervalPointer, speed) {
    this.name = name;
    this.color = color;
    this.currentPosition = 0;
    this.intervalPointer = intervalPointer;
    this.speed = speed;
  }

  reset() {
    this.currentPosition = 0;
  }
  start() {
    let curPos = this.currentPosition;
    if (curPos < this.finishPosition) {
      curPos = 3*this.speed / 10;
      console.log(curPos);
    } else {
      this.stop();
    }
  }
  stop() {
    clearInterval(this.intervalPointer);
    console.log(`${this.name} car was finished`);
  }
}

let timer = setInterval(() => {
  car1.start();
  car2.start();
  car3.start();
}, 300);

let car1 = new Car("Toyota", "#000000",  timer, Math.floor(Math.random()*50+1));
let car2 = new Car("BMW", "#cccccc",  timer, Math.floor(Math.random()*50+1));
let car3 = new Car("Mitsubishi", "	#0000FF",  timer, Math.floor(Math.random()*50+1));

// 8.
// Write 7) with function prototype style

function Car(name, color, intervalPointer, speed) {
  this.name = name;
  this.color = color;
  this.currentPosition = 0;
  this.intervalPointer = intervalPointer;
  this.speed = speed;
}
Car.finishPosition = 200;
Car.prototype.reset = function() {
  this.currentPosition = 0;
};
Car.prototype.start = function() {
  let curPos = this.currentPosition;
  if (curPos < this.finishPosition) {
    curPos = 3*this.speed / 10;
    console.log(curPos);
  } else {
    this.stop();
  }
};
Car.prototype.stop = function() {
  clearInterval(this.intervalPointer);
  console.log(`${this.name} car was finished`);
};

let timer = setInterval(() => {
  car1.start();
  car2.start();
  car3.start();
}, 300);

let car1 = new Car("Toyota", "#000000", timer, Math.floor(Math.random()*50+1));
let car2 = new Car("BMW", "#cccccc", timer, Math.floor(Math.random()*50+1));
let car3 = new Car("Mitsubishi", "	#0000FF", timer, Math.random()*50+1));
