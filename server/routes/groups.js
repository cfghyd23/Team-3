const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const Response = require("../models/http.js")
const groups_router = exp.Router();


groups_router.post('/create', asyncHandler(async (req,res)=>{
    let mongo = new mongodbConnector()
    let groups = await mongo.connect('groups')

    await groups.insertOne({
        "name" : req.body.name,
        "description" : req.body.description,
        "creator" : req.body.creator,
        "group_id" : (await groups.aggregate().toArray()).length + 1
    })

    let resp = new Response(res)
    resp.sendJson({
        "msg" : "Group Created",
    })

}))


groups_router.get('/show-all', asyncHandler(async (req,res)=>{
    let mongo = new mongodbConnector()
    let groups = await mongo.connect('groups')

    let group_data = await groups.aggregate().project({
        name : 1 ,
        group_id : 1
    }).toArray()    

    let response = new Response(res)
    response.sendJson({
        "groups" : group_data
    })

}))



groups_router.post('/create-post', asyncHandler(async (req, res)=>{
    let mongo = new mongodbConnector()
    let groups = await mongo.connect('group_posts')

    await groups.insertOne({
        "title" : req.body.title,
        "description" : req.body.description,
        "group_id" : req.body.group_id,
        "creator" : req.body.creator,
        "time_created" : (new Date()).getTime() // current timestamp 
    })

    let resp = new Response(res)
    resp.sendJson({
        "msg" : "Post Created"
    })

}))


module.exports = groups_router