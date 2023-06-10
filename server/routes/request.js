const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const Response = require("../models/http.js")
const router = exp.Router();

router.get('/', asyncHandler(async (req, res) => {
    try {
      const mongodb = new mongodbConnector();
      let reqs = await mongodb.connect("requests");
  
      let json = await reqs.find({}).toArray();
  
      res.status(200).json(json);
    } catch (error) {
      console.error("Error retrieving requests:", error);
      res.status(500).json({ error: "An error occurred while retrieving the requests" });
    }
}))  

// get specific user request by _id of the request
router.get('/:id', asyncHandler(async (req,res) => {
    try {
        const mongodb = new mongodbConnector();
        let reqs = await mongodb.connect("requests");

        let json = await req.findOne({
            "_id": req.params.id
        })

        res.status(200).json(json);
    } catch (error) {
        console.error("Error retrieving requests:", error);
        res.status(500).json({ error: "An error occurred while retrieving the requests" });

    }
}))

router.post('/create', asyncHandler(async (req,res) => {
    try {
        const mongodb = new mongodbConnector();
        let reqs = await mongodb.connect("requests");
    
        await reqs.insertOne({
          "tag": req.body.tag,
          "emergency": req.body.emergency,
          "title": req.body.title,
          "description": req.body.description,
          "additionalFiles": req.body.files,
          "funds": req.body.funds,
          "email": req.body.email,
          "status": 0, // default status is open
        //   "assignedTo": "",
          "time_created": new Date().getTime() // current timestamp
        })

    res.status(200).json({ message: "Request created successfully" });
    } catch (error) {
        console.error("Error creating request:", error);
        res.status(500).json({ error: "An error occurred while creating the request" });
    }
}))
  

// router.put('/:id', asyncHandler(async (req,res) => {
//     const mongodb = new mongodbConnector()
//     let reqs = mongodb.connect("requests")

//     let json = await reqs.updateOne({
//         "_id" : req.params.id
//     },{
//         "tag": req.body.tag,
//         "emergency": req.body.emergency,
//         "title": req.body.title,
//         "description": req.body.desc,
//         "additionalFiles": req.body.files,
//         "funds": req.body.funds,
//         "email": req.body.email,
//         "status": req.body.status, 
//         "assignedTo": req.body.assignedTo
//     })

//     let response = new Response(res);
//     response.sendJson(json, 200)

// }))

module.exports = router

