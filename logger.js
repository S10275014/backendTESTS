// (function (exports, require, module, __filename, __dirname)) {
//   var url = "https://chatgpt.com/";

//     function log(message) {
//       //Send an http request
//       console.log(message);
//     }

// module.exports = log;
// }
// (function (exports, require, module, __filename, __dirname) {
//   var url = "https://chatgpt.com/";

//   function log(message) {
//     // Send an HTTP request
//     console.log(message);
//   }

//   // module.exports = log;

//   // module.exports.log = log;
//   // exports.log = log;

//   // exports = log; //module.exports
// });
// (exports, require, module, __filename, __dirname);
console.log(__filename);
console.log(__dirname);
//var x =;
var url = "https://chatgpt.com/";

function log(message) {
  //Send an http request
  console.log(message);
}

//log("Test");

//module.exports.log = log;
//module.exports.url = url;
module.exports = log;
//module.exports.endPoint = url;

// function test(abc) {
//   console.warn(abc + ", Please try again!");
// }

// module.exports.test = test;
