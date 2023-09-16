const mongoose = require('mongoose')
const Schema = mongoose.Schema

const followSchema = new Schema({
    username: { type: Schema.Types.ObjectId, ref: 'User' },
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

module.exports = mongoose.model('Follow', followSchema)