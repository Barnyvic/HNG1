const express = require("express");
const dbConnection = require("./db/database");
const UserRouter = require("./routes/userRoute");

const app = express();

const port = 3000;

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", UserRouter);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
