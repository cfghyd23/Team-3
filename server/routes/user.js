const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const Response = require("../models/http.js")
const user_router = exp.Router();

user_router.get('/fetch',asyncHandler(async (req,res)=>{
    const mongodb = new mongodbConnector()
    let users = mongodb.connect("users")

    let respo = (await users).findOne({
        "email" : req.body.emal
    })

    let response = new Response(res);
    response.sendJson(respo,220)
}))

// user detials are fetched to show in the profiles section of the pap

module.exports = user_router