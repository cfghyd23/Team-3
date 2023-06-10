const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const Response = require("../models/http.js")
const user_router = exp.Router();

user_router.get('/fetch',asyncHandler(async (req,res)=>{
    
    let respo = await getUserData(req.body.email)
    let response = new Response(res);
    response.sendJson(respo,220)
}))

// user detials are fetched to show in the profiles section of the pap

async function getUserData(email){
    const mongodb = new mongodbConnector()
    let users = mongodb.connect("users")

    let respo = (await users).findOne({
        "email" : email
    })

    return respo 
}

module.exports.user_router = user_router
module.exports.getUserData = getUserData