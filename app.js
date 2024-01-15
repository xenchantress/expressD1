// i imported express
const express = require("express");

const data = require('./data');
// i created instance from express
const app = express();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`I am running on port ${PORT}`);
});


app.get("/hi", (req, res) => {
  
  return res.json(data);
});
