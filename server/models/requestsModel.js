const mongoose = require("mongoose")

const Schema = mongoose.Schema

const requestSchema = new Schema(
    {
        tag:{
            type:Number
            // 0 -> living
            // 1 -> food
            // 2 -> education
            // 3 -> health
            // 4 -> others
        },
        emergency: {
            type:Number
            // 0 -> not emergency
            // 1 -> emergency
        },
        title: {
            type:String
        },
        description: {
            type:String
        },
        additonalFiles: [{
            type:String
        }],
        funds: {
            type: Number,
            default: 0
        },
        email: {
            type: String,
        },
        status: {
            type: Number,
            default: 0
            // 0 -> open
            // 1 -> assigned
            // 2 -> closed
        },
        assignedTo: {
            type: String
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("request", requestSchema)