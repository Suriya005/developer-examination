const Item = require("../models/itemModel");

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "200",
      message: "OK",
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve items",
    });
  }
};

exports.getItemById = async (req, res) => {
  const { _id } = req.query;

  try {
    const item = await Item.findOne({ _id });

    if (!item) {
      return res.status(404).json({
        status: "error",
        message: "Item not found",
      });
    }

    res.status(200).json({
      status: "200",
      message: "OK",
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve item",
    });
  }
};

exports.insertItem = async (req, res) => {
  const { name, price, quantity, description } = req.body;

  try {
    const newItem = new Item({
      name,
      price,
      quantity,
      description,
    });
    await newItem.save();

    res.json({
      status: "200",
      message: "OK",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to insert item",
    });
  }
};

exports.updateItem = async (req, res) => {
  const { id, name, price, quantity, description } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, {
      name,
      price,
      quantity,
      description,
    });

    if (!updatedItem) {
      return res.status(404).json({
        status: "error",
        message: "Item not found",
      });
    }

    res.status(200).json({
      status: "200",
      message: "OK",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to update item",
    });
  }
};
