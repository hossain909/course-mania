const express = require("express");
const router = express.Router()

const { getAllOrders, userOrder, addNewOrder } = require("../controllers/orderControllers")

// order routes
router.get("/", getAllOrders);
router.post("/add-order", addNewOrder);
router.get("/user-order", userOrder);

module.exports = router;

// // find all order form  Database
// router.get("/allOrders", (req, res) => {
//   orderCollection.find({})
//     .toArray((err, items) => {
//       res.send(items)
//     })
// })
// // find a users order form  Database
// router.get("/orders", (req, res) => {
//   orderCollection.find({ email: req.query.email })
//     .toArray((err, items) => {
//       res.send(items)
//     })
// })
// //  order a course
// router.post("/addOrder", (req, res) => {
//   const order = new Order(req.body)
//   Order.save(order)
//     .then(result => {
//       res.send(result)
//     })
//     .catch(error => {
//       console.log(error);
//     })
// })
// module.exports = router;