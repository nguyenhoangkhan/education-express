const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController.js");
router.get("/stored/courses", meController.courses);
router.get("/stored/news", meController.news);
router.get("/trash/courses", meController.trash);

module.exports = router;
