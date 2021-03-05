const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const fs = require("fs");
const path = require('path');

//for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//routes
require('./routes')(app);

// listener
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });