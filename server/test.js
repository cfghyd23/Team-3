require('dotenv').config()
const mongodbConnector = require("./models/mongodb.js")

const mng = new mongodbConnector()

mng.connect("test-coll-2").then((ret)=>{
    ret.insertOne({
        "name" : "just created"
    }).then((ret)=>{
        mng.close()
    })
})
