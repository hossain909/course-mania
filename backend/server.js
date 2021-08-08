const express = require("express");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const fs = require("fs-extra")
const fileUpload = require("express-fileupload");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.awgwi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("courses"))
app.use(fileUpload())

// const port = 5000

app.get("/", (req, res) => {
  res.send("It's Working....")
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const courseCollection = client.db("learnProgramming").collection("courses");
  const orderCollection = client.db("learnProgramming").collection("orders");
  const reviewsCollection = client.db("learnProgramming").collection("reviews");
  const adminCollection = client.db("learnProgramming").collection("admin");
  console.log("DB connected successfully");

  // get all course details from Database
  app.get("/courses", (req, res) => {
    courseCollection.find({})
      .toArray((err, docs) => {
        res.send(docs)
      })
  })
  // find single course details from Database
  app.get("/courses/:id", (req, res) => {
    courseCollection.find({ _id: ObjectId(req.params.id) })
      .toArray((err, docs) => {
        res.send(docs[0])
      })
  })

  // add Courses to Database 
  app.post("/addCourse", (req, res) => {
    const newCourse = req.body
    courseCollection.insertOne(newCourse)
      .then(result => {
        res.send("success")
      })
  })
  //  order a course 
  app.post("/orderCourse", (req, res) => {
    const bookCourse = req.body
    orderCollection.insertOne(bookCourse)
      .then(result => {
        res.send("success")
      })
  })

  // add reivews to Database 
  app.post("/addReview", (req, res) => {
    const newReview = req.body
    reviewsCollection.insertOne(newReview)
      .then(result => {
        res.send("success")
      })
  })

  // find all reviews form Database
  app.get("/reviews", (req, res) => {
    console.log(req.body);
    reviewsCollection.find({})
      .toArray((err, docs) => {
        res.send(docs)
      })
  })

  // find a users order form  Database
  app.get("/orders", (req, res) => {
    orderCollection.find({ email: req.query.email })
      .toArray((err, items) => {
        res.send(items)
      })
  })


  // find all order form  Database
  app.get("/allOrders", (req, res) => {
    orderCollection.find({})
      .toArray((err, items) => {
        res.send(items)
      })
  })

  // make an admin to Database
  app.post("/makeAdmin", (req, res) => {
    const email = req.body.email;
    adminCollection.insertOne({ email: email })
      .then(result => {
        res.send(result.insertedCount > 0)
      })
  })

  // delete a course from Database
  app.delete("/delete/:id", (req, res) => {
    courseCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        res.send(result.deletedCount > 0)
      })
  })

  app.patch("/update/:id", (req, res) => {
    orderCollection.updateOne({ _id: ObjectId(req.params.id) },
      {
        $set: { status: req.body.status }
      })
      .then(result => {
        res.send(result.modifiedCount > 0)
      })
  })




  // check if user an admin or not 
  app.post("/isAdmin", (req, res) => {
    const email = req.body.email;
    adminCollection.find({ email: email })
      .toArray((err, admin) => {
        res.send(admin.length > 0);
      })
  })




});

app.listen(process.env.PORT)