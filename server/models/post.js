const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema      //mongoose.Schema.ObjectId --both are same, there we are using destructuring 

const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 100,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    content: {
        type: {},
        required: true,
        min: 20,
        max: 2000000
    },
    user: {
        type: String,
        default: 'Admin'
    }
}, {timestamp: true});

// we are creating the mongoose model named as Post and based on postSchema and exporting on the same time

module.exports = mongoose.model('Post', postSchema)