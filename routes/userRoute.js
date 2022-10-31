const Users = require("../model/model");

const express = require("express");

const UserRouter = express.Router();

UserRouter.post("/", async (req, res) => {
  const { Username, backend, age, bio } = req.body;

  try {
    const user = await Users.create({
      slackUsername: Username,
      backend: backend,
      age: age,
      bio: bio,
    });

    res.status(201).send(user);
  } catch (error) {
    res.send(error.message);
  }
});

UserRouter.get("/", async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).send(user);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = UserRouter;
