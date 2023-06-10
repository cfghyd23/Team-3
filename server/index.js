// Index.js File

let express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let user_router = require('./routes/user.js');
let feed_router = require('./routes/feed.js');
let request_router = require('./routes/request.js');
app.use('/user',user_router)
app.use('/feed',feed_router)
app.use('/request',request_router)

app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,()=>{
    console.log(`Server is now running`)
})
