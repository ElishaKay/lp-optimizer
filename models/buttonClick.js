const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const buttonClickSchema = new mongoose.Schema(
    {
        ip: {
            type: String
        },
        trafficSource: {
            type: String
        },
        buttonColor: {
            type: String,
            index: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('buttonClick', buttonClickSchema);
