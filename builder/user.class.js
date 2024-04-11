import Address from "./address.class.js";

// First Way of creating Builder

// class User {
//   constructor(name, { age = 18, phoneNumber = "011", address } = {}) {
//     this.name = name;
//     this.age = age;
//     this.phoneNumber = phoneNumber;
//     this.address = address;
//   }
// }

// const user = new User("Ahmed", {
//   address: new Address("02", "Cairo", "Matarya"),
//   age: 29,
// });
// console.log(user);

// Second way of creating Builder

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setUserAge(age) {
    this.user.age = age;
    return this;
  }

  setUserPhoneNumber(phoneNumber) {
    this.user.phoneNumber = phoneNumber;
    return this;
  }

  setUserAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("Ahmed")
  .setUserAge(29)
  .setUserPhoneNumber("011")
  .setUserAddress(new Address("02", "Cairo", "Matarya"))
  .build();
console.log(user);
