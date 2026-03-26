import express, { request, response } from "express";
import data from "./data/mock.json" with { type: "json" };

//const express = require("express");
const app = express();
const PORT = 3000;
//GET
// app.get("/", (request, response) => {
//   response.send("This is a GET request at /");
// });

//GET with next()
app.get(
  "/next",
  (request, response, next) => {
    console.log("The response will be sent by the next function.");
    next();
  },
  (request, response) => {
    response.send("I just set up a route with a second callback");
  },
);

app.get("/animals", (request, response) => {
  response.json(data);
});

//GET with Routing Parameters
app.get("/class/:id", (request, response) => {
  const studentID = Number(request.params.id);

  const student = data.filter((student) => student.id === studentID);

  response.send(student);
});

//app.get('users/:userId/books/:bookId', function (req, res) {
//response.send(req.params)
//})

app.get("/chatgpt", (request, response) => {
  response.json({
    greeting: "Hello World",
    humans: data,
  });
});

//using the public folder at the root of the project
app.use(express.static("public"));

//using the images folder at the route /image
app.use("/images", express.static("images"));

//POST
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});
//PUT
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});
//DELETE
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

//GET
app.get("/", (request, response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`The Server is running on port ${PORT}`);
  console.log(data);
});
