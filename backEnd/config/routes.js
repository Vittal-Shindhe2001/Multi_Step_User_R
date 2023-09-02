const express=require('express')
const routes=express.Router()
const userController=require('../app/controller/userController')
routes.post('/api/user',userController.create)

module.exports=routes