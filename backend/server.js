const express = require("express");
require("./db/mongoose");

const WordRouter = require("./routers/word-router");
const UserRouter = require("./routers/user-router");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(WordRouter);
app.use(UserRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
