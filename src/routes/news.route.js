const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsControllers");

router.get("/:slug", newsController.detail);
router.get("/", newsController.index);

module.exports = router;