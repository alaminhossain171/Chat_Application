// external imports
const express = require("express");
const { getInbox } = require("../controllers/inboxController");
const { decorateHtmlResponse } = require("../middlewares/common/decorateHtmlResponse");




const router = express.Router();

router.get('/',decorateHtmlResponse('Inbox Page'),getInbox)

module.exports = router;