
const express = require('express');
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use("/", require('./routes/price'));

app.listen(PORT, (err) => {
    if(err) console.log("Erro while connection to the server");
    else console.log(`Server running on ${PORT}`);
});