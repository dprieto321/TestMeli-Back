const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/listController");
const { getItemById } = require("../controllers/detailController");

router.get("/", getItems);

router.get("/:id", getItemById);

module.exports = router;
