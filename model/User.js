// 引入mongodb
const mongoose = require('../config/mongodbConnection')
// 建立用户表
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    age: {
        type: String,
        unique: true
    },
    city: {
        type: String,
        unique: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
})

// 建立用户数据库模型
const User = mongoose.model('User', UserSchema)
module.exports = { User }
