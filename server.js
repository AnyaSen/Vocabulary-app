const express = require("express");
require("./db/mongoose");
const dotenv = require("dotenv");

const WordRouter = require("./routers/word-router");
const UserRouter = require("./routers/user-router");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(WordRouter);
app.use(UserRouter);

dotenv.config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
