const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProfileSchema = new Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
   date: {
        type: String
    }
})

const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile