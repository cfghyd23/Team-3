// Index.js File

let express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config()


const app = express()
app.use(express.static('../static'))
var cors = require('cors');
app.use(cors()); 
app.use(express.static('../static/'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let user_router = require('./routes/user.js').user_router;
let feed_router = require('./routes/feed.js');
let groups_router = require('./routes/groups.js');
let request_router = require('./routes/request.js');

app.use('/user',user_router)
app.use('/feed',feed_router)
app.use('/groups',groups_router)
app.use('/request',request_router)
app.use('/groups',groups_router)

app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,()=>{
    console.log(`Server is now running`)
})
