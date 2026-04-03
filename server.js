//console.log("H");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  //res.sendStatus(500);
  //res.status(500).send("Hi");
  //res.send(`Hi`);
  //res.status(500).json({ message: "Error" });
  //res.json({ message: "Hi" });
  //res.sendStatus(200);
  //res.download("server.js");
  //res.render("index");
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);

//index.ejs
//<!-- Hello <%= text %> -->
