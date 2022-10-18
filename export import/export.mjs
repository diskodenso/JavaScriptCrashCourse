// **BENANNTER EXPORT**
// definiere arrow function
const cube = (x) => x * x * x;
const PI = Math.PI;
    // einzelne bestimmte objecte (cube, PI) werden exportiert
export { cube, PI };
// **UNBENANNTER EXPORT**
const cube2 = (y) => y * y * y;
const PI2 = Math.PI;
    // komplettes object wird exportiert
export default { cube2, PI2 };
