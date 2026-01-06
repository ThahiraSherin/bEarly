const mongoose = require('mongoose');

const medicineSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    minStock : {
        type: Number,
        required: true,
        min: 0, 
    },    
    price : {
        type: Number,
        required: true, 
    },
    expiryDate : {
        type: Date,
        required: true, 
    },
},
    { timestamps: true }
);  

module.exports = mongoose.model('Medicine', medicineSchema);