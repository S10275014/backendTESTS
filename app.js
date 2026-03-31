// // function sayHello(name) {
// //   console.log("Hello " + name);
// // }

// // //sayHello("Mosh");
// // console.log(window);

// // console.log(); //global

// // setTimeout();
// // clearTimeout();

// // setInterval();
// // clearInterval();

// //window.console.log;
// //window.setTimeout

// // var message = "";

// // //global.console
// // //global.setTimeout
// // //window.message;
// // console.log(global.message);

// // var sayHello = function () {};

// // window.sayHello();

// // console.log(module);

// var log = require("./logger"); //const logger

// console.log(log);

// //logger.log("message");
// //log(message);
// //logger.endPoint;

// //logger.test("Cake");
// log("Test message");

// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// var test = path.parse("Test");
// var hello = "/home/user/file.txt";
// var test = path.parse(hello);
// console.error("Error 404");

// console.log(test);
// const os = require("os");

// var totalMemory = os.totalmem();

// var freeMemory = os.freemem();

// //console.log("Total Memory: " + totalMemory);

// // Template string
// // ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result: ", files);
//   }
// });

const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listerner
emitter.on("messageLogged", function () {
  console.log("Listerner called");
});

// emitter.once("messageLogged", function () {
//   console.warn("Please try again later");
// });

//Raise an event
emitter.emit("messageLogged");
