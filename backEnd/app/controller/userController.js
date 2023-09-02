const Profile = require('../model/profileModel')
const UserModel = require('../model/userModel')
const bcryptjs = require('bcryptjs')

const userController = {}

userController.create = async (req, res) => {
    try {
        const { body } = req
        const user = new UserModel(body.profile[0])
        const salt = await bcryptjs.genSalt()
        const hashpassword = await bcryptjs.hash(user.password, salt)
        user.password = hashpassword
        const result = await user.save()
        // res.json(result)
        if (result._id) {
            const { body } = req
            const profile = await Profile.create({ userId: result._id, ...body.user[0] })
            if (profile._id) {
                console.log(profile);
                res.json(profile)
                console.log('profile creation successfull');
            } else {
                console.log('Profile creation fail');
            }
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = userController