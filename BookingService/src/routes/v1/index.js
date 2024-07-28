// const express = require('express')

// const router = express.Router()

// module.exports = router

const express = require("express");

const { BookingController } = require("../../controllers/index");

const bookingController = new BookingController();
const router = express.Router();

router.post("/bookings", bookingController.create);
router.post("/publish", bookingController.sendMessageToQueue);

module.exports = router;