const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/usuarios", (req, resp) => {
  const { limit, offset} = req.query;

  if (limit && offset) {
    resp.json({
      limit,
      offset
    });
  } else {
    resp.send("no hay parametros");
  }
});

module.exports = usersRouter
