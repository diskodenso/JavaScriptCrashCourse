// benannter import from export
import { cube, PI } from "./export.mjs";
console.log(cube(5));
console.log(PI);
// unbenannter import from export
// man gibt dem default object welches die einzelnen objecte 
// hält einen Namen und erreicht diese über dot notation
import BeispielName from "./export.mjs";
console.log(BeispielName.PI2);
console.log(BeispielName.cube2);
