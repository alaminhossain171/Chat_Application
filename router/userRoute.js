// external imports
const express = require("express");
const { getUser } = require("../controllers/userController");
const { decorateHtmlResponse } = require("../middlewares/common/decorateHtmlResponse");




const router = express.Router();

router.get('/',decorateHtmlResponse('User Page'),getUser)

module.exports = router;