const router = require("express").Router();
const Authentication = require("../middleware/Authentication");
const MessageController = require("../controllers/MessageController");

router.post("/message", Authentication, MessageController.createMessage);

router.get("/conversations", Authentication, MessageController.getConversations);

router.get("/message/:id", Authentication, MessageController.getMessages);


module.exports = router;