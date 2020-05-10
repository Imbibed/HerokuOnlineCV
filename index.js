const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000

const HEROKU_LINK = "";

app.use("/", (req, res, next) => {
    fs.stat(path.join(__dirname, "dist"), (err, stats) => {
        if(err) res.end("Error, no dist folder detected.");
        else next();
    });
});

app.use("/", express.static(path.join(__dirname, "dist")));

app.get("/**", (req, res) => {
    res.end("Error, please try this link: \r\n" + HEROKU_LINK);
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});