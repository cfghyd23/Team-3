const exp = require("express");
const asyncHandler = require("express-async-handler")
const mongodbConnector = require("../models/mongodb.js")
const router = exp.Router();
const getUserData = require("./user.js").getUserData
const { ObjectId } = require('mongodb');

router.get('/', asyncHandler(async (req, res) => {
    let user = await getUserData(req.body.user)
    let isMember = false;
    
    if(user.role == 1){
      isMember = true;
    }
    try {
      const mongodb = new mongodbConnector();
      let reqs = await mongodb.connect("requests");
  
      let json = await reqs.find({}).toArray();
  
      res.status(200).json({
        "isMember" : isMember,
        "requests" : json
      });

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
c
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
          "time_created": new Date().getTime(), // current timestamp
          "city": req.body.city,
        })

    res.status(200).json({ message: "Request created successfully" });
    } catch (error) {
        console.error("Error creating request:", error);
        res.status(500).json({ error: "An error occurred while creating the request" });
    }
}))
  

// update status of request to closed
router.put('/close/:id', asyncHandler(async (req, res) => {
  try {
    const mongodb = new mongodbConnector();
    let reqs = await mongodb.connect("requests");

    const id = req.params.id;
    const query = { _id: ObjectId(id) };

    const updateFields = {
      $set: {
        status: 2
      }
    };

    const result = await reqs.updateOne(query, updateFields);

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Request updated successfully" });
    } else {
      res.status(404).json({ error: "Request not found" });
    }
  } catch (error) {
    console.error("Error updating request:", error);
    res.status(500).json({ error: "An error occurred while updating the request" });
  }
}))

// update the assigned member for the request
router.post('/claim',asyncHandler(async (req,res)=>{
  const mongodb = new mongodbConnector();
  let reqs = await mongodb.connect("requests");

  await reqs.updateOne({
    _id : new ObjectId(req.body.id),
  },{
    $set : {
      status : 1
    }
  })

  res.json({
    "msg" : "Updated request status"
  })

}))

module.exports = router

