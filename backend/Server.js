const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Heyy from Backend");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
