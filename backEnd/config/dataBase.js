const mongoose = require('mongoose')

const config = async () => {
    try {
        const dataBase = await mongoose.connect('mongodb://localhost:27017/Multi_Step_UserRegistration')
        console.log('DataBase Connected Successfull');
    } catch (error) {
        console.log(error);
    }
}
module.exports = config