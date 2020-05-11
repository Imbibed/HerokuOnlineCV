const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000

const HEROKU_LINK = "";

/*app.use((req, res, next) => {
    if(req.url === "/favicon"){
        res.status(204).end("no favicon");
    }else{
        next();
    }
})*/

/*app.use("favicon", (req, res, next) => {
    console.log("favicon");
}),*/

app.use("/", (req, res, next) => {
    //console.log("Request url: " + req.url);
    fs.stat(path.join(path.join(__dirname, "dist"), "online-cv"), (err, stats) => {
        if(err) res.status(500).end("Error, no dist folder detected.");
        else next();
    });
});

app.use("/", express.static(path.join(path.join(__dirname, "dist"), "online-cv")));

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});