const express = require("express");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const fs = require("fs-extra")
const fileUpload = require("express-fileupload");
require("dotenv").config();
const connectDB = require("./config/db")
const Order = require("./models/order")

// all the routes
const courseRoutes = require("./routes/courseRoutes");
const orderRoutes = require("./routes/orderRoutes");
connectDB()
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("courses"))
app.use(fileUpload())

// const port = 5000

app.get("/", (req, res) => {
  res.send("It's Working...")
})

/* course routes */
app.use("/course", courseRoutes);
/* order routes */
app.use("/order", orderRoutes);

// app.post("/addOrder", (req, res) => {
//   console.log(req.body);
//   const data = req.body;
//   const order = new Order(data)
//   order.save(error => {
//     if (error) {
//       res.status(500).json({ msg: "Internal sever error!" })
//     } else {
//       res.json({
//         msg: "Your order has been saved!!!"
//       })
//     }
//   })
// })

// // add reivews to Database 
// app.post("/addReview", (req, res) => {
//   const newReview = req.body
//   reviewsCollection.insertOne(newReview)
//     .then(result => {
//       res.send("success")
//     })
// })

// // find all reviews form Database
// app.get("/reviews", (req, res) => {
//   console.log(req.body);
//   reviewsCollection.find({})
//     .toArray((err, docs) => {
//       res.send(docs)
//     })
// })


//   // make an admin to Database
//   app.post("/makeAdmin", (req, res) => {
//     const email = req.body.email;
//     adminCollection.insertOne({ email: email })
//       .then(result => {
//         res.send(result.insertedCount > 0)
//       })
//   })

// // delete a course from Database
// app.delete("/delete/:id", (req, res) => {
//   courseCollection.deleteOne({ _id: ObjectId(req.params.id) })
//     .then((result) => {
//       res.send(result.deletedCount > 0)
//     })
// })

// app.patch("/update/:id", (req, res) => {
//   orderCollection.updateOne({ _id: ObjectId(req.params.id) },
//     {
//       $set: { status: req.body.status }
//     })
//     .then(result => {
//       res.send(result.modifiedCount > 0)
//     })
// })


// // check if user an admin or not 
// app.post("/isAdmin", (req, res) => {
//   const email = req.body.email;
//   adminCollection.find({ email: email })
//     .toArray((err, admin) => {
//       res.send(admin.length > 0);
//     })
// })




// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))