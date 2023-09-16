const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partListSchema = new Schema({
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    partNum: { type: String}, 
    price: { type: String}, 
    supplier: { type: String },
    mileage: { types: String },
    date: { type: Date }
})

module.exports = mongoose.model('PartList', partListSchema)