const { MongoClient, ServerApiVersion } = require('mongodb');

class mongodbConnector{

    constructor(){
        this.url = `mongodb+srv://kavya:kavya123@cluster.zhqixog.mongodb.net/?retryWrites=true&w=majority`
    }

    async connect(collection){
        this.mongo = new MongoClient(this.url, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });

        return this.mongo.db(process.env.MONGODB_DB).collection(collection)
    }

    async close(){
        await this.mongo.close()
    }

}


module.exports = mongodbConnector