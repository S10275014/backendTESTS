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

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// //Register a listerner
// emitter.on("messageLogged", function () {
//   console.log("Listerner called");
// });

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("messageLogged", () => {
//   console.log("Listerner Called");
// });

// emitter.emit("messageLogged");

// function logError() {
//   console.error("This is a 503 error service request");
// }

// const EventEmitter = require("events");

//const emitter = new EventEmitter();

//Register a listener //e eventArgs

// emitter.on("messageLogged", function (args) {
//   console.log("Listener called", args);
// });
//Raise an event
//emitter.emit("messageLogged", 1, "url"); //ID 1

// emitter.emit("messageLogged", { id: 1, url: "https://chatgpt.com/" });
// // Add listener
// emitter.on("messageLogged", logError);

// // Remove listener later
// emitter.off("messageLogged", logError);

// emitter.once("messageLogged", function () {
//   console.warn("Please try again later");
// });

//Raise an event
// emitter.emit("messageLogged");

// //Raise logging (data: message)
// var message = "Hello World";
// emitter.emit("messageLogged", { data: message });

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (args) => {
//   console.log("Listener called", args);
// });

// logger.log("message");

const http = require("http");

//const server = http.createServer();
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World ");
    //res.write("Test");
    //res.writable("Test 2"); - desont work
    //res.emit("Hi"); //emit() is for events, not for writing to the response body. -- doesnt work
    //res.write("Test 3");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    // const msg = { data: "What the dog doing" };
    // const numbers = 42;
    // res.write(JSON.stringify(msg));
    // res.write(JSON.stringify(numbers));

    res.end();
  }
});
// server.on("connection", (socket) => {
//   console.log("New Connection...");
//   //console.log(socket);
// });

server.listen(3000);

console.log("Listening on port 3000...");
