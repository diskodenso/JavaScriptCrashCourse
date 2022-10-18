// function keyword - 
const square = function (e) {
  return a * a;
};
console.log(square(5));

// arrow function - 
// attributes outer the arrow function can't be reached inside the arrow function
const square2 = (e)=> {
  return a * a;
};
console.log(square2(5));

// short arrow function
const square3 = (e) => a * a;
console.log(square3(5));

// DIFFERENCE EXAMPLE - normal function
// this is binded to objects out of the fullName function
const car = {
  model: "fiesta",
  manufacturer: "Ford",
  fullName() {
    console.log(this);
    return `${this.manufacturer} ${this.model}`
  }
};
console.log(car.fullName)

// arrow function
// this is not reachable inside the arrow function
const car1 = {
  model: "fiesta",
  manufacturer: "Ford",
  fullName: ()=> {
    console.log(this);
    return `${this.manufacturer} ${this.model}`;
  },
};
console.log(car1.fullName);