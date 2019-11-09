const axios = require("axios");
// creational
//builder
class Address {
  constructor(city, street) {
    this.city = city;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

const user = new UserBuilder("Ann")
  .setAge(10)
  .setPhone("138943")
  .setAddress("ldldf")
  .build();
console.log(user);

// structural
//facade
function getUsers() {
  return getAxios("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getAxios("https://jsonplaceholder.typicode.com/posts", {
    userId
  });
}

getUsers()
  .then(({ data: users }) => {
    users.forEach(user => {
      getUserPosts(user.id).then(({ data: posts }) => {
        console.log(user.name, posts.length);
      });
    });
  })
  .catch(err => console.log(err));

function getAxios(url, params = {}) {
  const queryStr = Object.entries(params)
    .map(param => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");
  return axios(`${url}?${queryStr}`).then(res => res);
}
