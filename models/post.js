const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    username: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    image: { tyep: String },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment' }
})