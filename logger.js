var url = "https://chatgpt.com/";

function log(message) {
  //Send an http request
  console.log(message);
}

//log("Test");

module.exports.log = log;
//module.exports.url = url;
module.exports.endPoint = url;
