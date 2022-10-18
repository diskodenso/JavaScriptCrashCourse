// javascript asyncronous behaviour
// setTimeout(() => {
//   console.log("Hello after 2 seconds");
// }, 2000);

// console.log("Hello!")

// create a promise with resolve, reject, .then, .catch
const greeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello after 2 seconds");
    resolve("Erledigt");
  }, 2000);
});

// const startGreeting = () => {
//   console.log(
//     greeting.then((result) => {
//       console.log(result);
//       console.log("Hallo");
//     })
//       .catch(()=>{})
//   );
// };

// Promises mit async await und trycatch blog
const startGreeting = async () => {
    try {
    const result = await greeting;
  } catch (error) {
      //Fehlerbehandlung
    console.log(error);
  }
};
startGreeting();
