const Router = require('express')
const router = Router();

const chatController = require('./controllers/chat/messages')

router.post("/userMessage", chatController.addUserMessage)

module.exports = router;