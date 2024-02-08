const userCtrl = {};

userCtrl.getUsers = (req,res) => res.json({message: 'User'})

userCtrl.deleteUsers = (req,res) => res.json({message: 'User deleted'})

userCtrl.createUsers = (req,res) => res.json({message:'User created'})

module.exports =userCtrl;