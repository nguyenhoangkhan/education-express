const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const hbs = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();
// Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
// Static file
app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(express.urlencoded({ extended: true }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Routing
route(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
