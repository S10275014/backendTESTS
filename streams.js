const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog3.txt");

// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   //console.log(chunk);
//   //console.log(JSON.stringify(chunk));
//   console.log(chunk.toString());
// });

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   //console.log(chunk);
//   //console.log(JSON.stringify(chunk));
//   //console.log(chunk.toString());

//   console.log(chunk);

//   //writeStream.write(`\n NEW CHUNK \n`);
//   writeStream.write("\nNEW WRITESTREAM\n");
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
