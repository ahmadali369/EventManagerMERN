// import express from "express";
// import { sendMessage } from "../controller/messageController.js";

// const router = express.Router();

// router.post("/send", sendMessage);

// export default router;
const sendMessage = require('../controller/messageController')
const express = require('express')

const router = express.Router();

router.post("/send", sendMessage);

module.exports = router;