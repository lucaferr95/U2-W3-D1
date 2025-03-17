class Users {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  differenceOfAge = function (otherUser) {
    if (this.age - otherUser.age > 0)
      return this.firstName + " is older than " + otherUser.firstName;
  };
}
const x = new Users("Luca", "Ferrara", "29", "Pollena Trocchien");
console.log(x);
const y = new Users("Sadie", "Sink", "22", "USA");
console.log(y);
console.log(x.differenceOfAge(y));
