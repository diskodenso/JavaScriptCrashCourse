/* const square = function (a) {
  return a * a;
}; */
/* const square = (a) => {
  return a * a;
}; */
/* const square = (a) => a * a;

console.log(square(5)); */

const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: () => {
    console.log(this);
    return `${this.manufacturer} ${this.model}`;
  },
};

console.log(car.fullName());
