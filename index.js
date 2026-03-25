import express, { request, response } from "express";
import data from "./data/mock.json" with { type: "json" };

//const express = require("express");
const app = express();
const PORT = 3000;
//GET
// app.get("/", (request, response) => {
//   response.send("This is a GET request at /");
// });

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
