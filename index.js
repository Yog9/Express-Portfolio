const express = require("express");
const data = require("./data.json").data;
const app = express();
app.set("view engine", "pug");
app.use("/static", express.static("public"));

//home route
app.get("/", (req, res) => {
  res.render("index", { projects: data.project });
});

//about route
app.get("/about", (req, res) => {
  res.render("about");
});

//project route
app.get("/project/:id", (req, res) => {
  res.render("project", { projects: data.project, id: req.params.id });
});

//catch 404 error
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.render("error", { err: err });
});

app.listen(3000, () => {
  console.log("App is running");
});
