const mongoose = require("./db");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  description: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
