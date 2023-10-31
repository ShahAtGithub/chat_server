const express =require('express')
const router=express.Router()
const UserController=require("../../controllers/user-controller")
const { Authentication } = require('../../middleware/authmiddleware')


router.post("/user",UserController.registerUser)
router.post("/user/login",UserController.authUser)
router.get("/user",Authentication,UserController.allUsers)


module.exports=router