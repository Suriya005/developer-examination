const express = require("express");
const router = express.Router();
// const Item = require("../models/itemModel");
const itemController = require("../controllers/itemController");

router.get("/get_item", itemController.getItems);
router.get("/get_item_by_id", itemController.getItemById);
router.post("/insert_item", itemController.insertItem);
router.post("/update_item", itemController.updateItem);

module.exports = router;
