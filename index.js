const express = require("express");
const data = require("./data.json");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send({ message: data });
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
