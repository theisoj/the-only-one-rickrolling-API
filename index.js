require("dotenv").config();
const express = require("express");
const rickrollsRoute = require("./routes/rickrolls")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", rickrollsRoute)

app.get("/", (req, res) => {
  res.json({ message: "Hello my dear rickroller! You're now on the homepage!" });
})

module.exports = app