const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    phone: Number
},
{timestamps:true,
    collection:'users'
},
);


module.exports = User = mongoose.model('user', userSchema);