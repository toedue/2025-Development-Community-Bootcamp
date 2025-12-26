const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const dataController = require("../controllers/dataController");

router.get("/", pageController.getHome);
router.get("/about", pageController.getAbout);
router.get("/contact", pageController.getContact);

router.get("/time", dataController.getTime);
router.post("/submit", dataController.handleSubmit);

module.exports = router;
