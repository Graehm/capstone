const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projecName: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    follows: { type: Schema.Types.ObjectId, ref: 'Follow'}
})

module.exports = mongoose.model('Project', projectSchema)