const express = require('express')
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");
const port = 3000;
const app = express()

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.use(bodyParser.json({ limit: "500mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "500mb",
        extended: true,
        parameterLimit: 1000000,
    })
);
app.use(express.json({ limit: "500mb" }));

const user_admin = require('./routes/user_admin')
app.use(cors({ credentials: true, origin: true, exposedHeaders: "*" }));

app.use("/user", user_admin);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("Server started!");
});