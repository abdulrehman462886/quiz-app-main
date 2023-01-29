const express = require('express')
const app = express()
const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
const Schema = require('./Schema')
const port = 5000
const cors = require("cors");
app.use(cors());
app.use(express.json());

const url = 
"mongodb+srv://mstintern6:mstintern6@cluster0.6z6cdol.mongodb.net/QData?retryWrites=true&w=majority/"
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((e) => {
    console.log(e);
  });

  const User = mongoose.model("records");
  app.post("/submit", async (req, res) => {
    const {statement, a, b, c, d, e } = req.body;
    try {
      await User.create({statement, a, b, c, d,e });
      res.send({ status: "Ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });

  app.get("/get", async (req, res) => {
        User.find({}, function (err, result) {
          res.send(result)
        });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})