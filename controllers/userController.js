
const User = require('../models/user');

exports.test = async (req, res) =>{
try {
    res.status(200).send("Test mrigel!!!!")
} catch (error) {
    res.status(400).send(error)
}

}

exports.addUser = async (req, res) => {
    try {
        const{name,email,phone }= req.body;
        const newUser = new User({name,email,phone})
        await newUser.save();
        res.status(200).send({msg: 'User added successfully'}, newUser)
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.addUser = async (req, res) => {
    try {
        const{name,email,phone}= req.body;
        const newUser= new User({name,email,phone})
await newUser.save();
res.status(201).send({msg: "User added successfully added", newUser})
    } catch (error) {
        res.status(400).send(error);
    }
}



exports.getUsers = async (req, res) => {
    try {
        const foundUsers = await User.find();
        if(foundUsers.length > 0) {
            res.status(200).send({msg: "list of users:", foundUsers});
        }else{
            res.status(200).send("no users found!!");
        }
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.getById = async (req, res) => {

    try {
        const{_id}=req.params;
        const foundUser = await User.findById(_id);
        res.status(200).send({msg: "user found", foundUser});
    } catch (error) {
        res.status(400).send(error);
    }
}




exports.deleteUser = async (req, res) => {

    try {
        const{_id}=req.params;
        const deleteUser = await User.findByIdAndDelete(_id);
        res.status(200).send({msg: "user found", deleteUser});
    } catch (error) {
        res.status(400).send(error);
    }
}



exports.updateUser = async (req, res) => {

    try {
        const{_id}=req.params;
        const{name,email,phone}=req.body;
        const updateUser = await User.findByIdAndUpdate({_id} , {name,email,phone});
        const userUpdated = await User.findById(_id)
        res.status(200).send({msg: "userUpdated", userUpdated});
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.findName = async (req, res) => {

    try {
        const{name}=req.query;
        const foundUsers = await User.find({name: {$regex : name}})
        res.status(200).send({msg: "find name", foundUsers});
    } catch (error) {
        res.status(400).send(error);
    }
}










