const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: { type: Schema.Types.ObjectId, red: 'User' },
    image: { type: String },
    statement: { type: String },
    follow: { type: Schema.Types.ObjectId, ref: 'Follow' }, 
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

module.exports = mongoose.model('Profile', profileSchema)