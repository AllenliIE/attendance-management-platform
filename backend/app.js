const express = require("express");
const routes = require("./routes");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 3000;
const SESSION_SECRET = "secret";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
);
app.use(routes);

app.listen(port, () => {
  console.info(`Attendance-Management-Platform is listening on port:${port}!`);
});

module.exports = app;
