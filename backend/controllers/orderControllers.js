const Order = require("../models/order.js")

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.json(orders)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error!" })
  }
}

const addNewOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    console.log(newOrder);
    const order = new Order(newOrder)
    order.save()
      .then(result => {
        console.log(result);
        res.send(result)
      })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!" })
  }
}

const userOrder = async (req, res) => {
  try {
    const order = await Order.find({ email: req.query.email })
    console.log(order);
    res.json(order)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Server Error!" })
  }
}

module.exports = {
  getAllOrders,
  userOrder,
  addNewOrder
}