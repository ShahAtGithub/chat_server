const express =require('express')
const router=express.Router()
const UserController=require("../../controllers/user-controller")
const ChatController=require("../../controllers/chat-controller")
const MessageController=require("../../controllers/messages-controller")
const { Authentication } = require('../../middleware/authmiddleware')


router.post("/user",UserController.registerUser)
router.post("/user/login",UserController.authUser)
router.get("/user",Authentication,UserController.allUsers)

//chat 
router.post("/chat",Authentication,ChatController.accessChat)
router.get("/chat",Authentication,ChatController.fetchChats)
router.post("/chat/group",Authentication,ChatController.createGroupChat)

//send messages
router.post("/messages",Authentication,MessageController.sendMessage)
router.get("/messages/:chatId",Authentication,MessageController.allMessages)


module.exports=router