// external imports
const express = require("express");
const { getLogin } = require("../controllers/loginController");
const { decorateHtmlResponse } = require("../middlewares/common/decorateHtmlResponse");




const router = express.Router();

router.get('/',decorateHtmlResponse('Login Page'),getLogin)

module.exports = router;