//console.log("hello world from nodejs");

const tutorial = require("./tutorial");
console.log(tutorial);
//sum(1, 1);

// console.log(tutorial(1, 1));

console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
