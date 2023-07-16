const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//ROUTES
app.get("/", (req, res) => {
    res.send("budget app")
})

const transactionController = require("./controller/transactionController.js")
app.use("/transaction", transactionController)


//404
app.get("*", (req, res) => {
    res.json({error : "Ooops page not found"})
})

//EXPORT
module.exports = app;

