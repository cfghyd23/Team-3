const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const Response = require("../models/http.js")
const feed_router = exp.Router();

feed_router.post('/create',asyncHandler(async (req,res)=>{
    console.log("creating")
    let mongo = new mongodbConnector()
    let feeds = await mongo.connect("feeds")
    // add checks if the request is created onlt by alumnu or a memver
    await feeds.insertOne({
        "tag": req.body.tag,
        "title" : req.body.title,
        "description" : req.body.description,
        "author": req.body.email,
        "time_created" : (new Date()).getTime() // current timestamp 
    })

    let response = new Response(res)
    response.sendJson({
        msg : "Uploaded the post !"
    })

    await mongo.close()
}))


feed_router.get('/fetch', asyncHandler(async (req,res)=>{
    let mongo = new mongodbConnector()
    let feeds = await mongo.connect("feeds")

    let sorted_by_dsc_tm = await(await feeds.aggregate([{
        '$sort' : {
            timestamp : -1
        }
    }])).toArray()

    console.log(sorted_by_dsc_tm)
    let response = new Response(res)
    response.sendJson({
        "feeds" : sorted_by_dsc_tm
    },200)

}))



module.exports = feed_router