const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const UserModel=mongoose.model('UserModel',UserSchema)

module.exports=UserModel