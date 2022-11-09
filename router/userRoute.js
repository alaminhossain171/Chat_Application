// external imports
const express = require("express");
const { getUser } = require("../controllers/userController");
const { decorateHtmlResponse } = require("../middlewares/common/decorateHtmlResponse");
const avaterUpload = require("../middlewares/uploads/avaterUpload");




const router = express.Router();

router.get('/',decorateHtmlResponse('User Page'),getUser);

router.post("/",avaterUpload)

module.exports = router;