const userCtrl = {};

const User = require('../models/user');

userCtrl.getUsers = async(req,res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.deleteUsers = async(req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted'})
}

userCtrl.createUsers = async(req,res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({message:'User created'})
}

module.exports =userCtrl;