'use strict';

class Response{

    constructor(res){
        this.res = res
    }

    setContentType(tp){
        this.setHeader('Content-Type',tp)
    }

    setMIMEType(tp){
        this.res.type(tp)
    }

    setStatus(code){
        this.res.status(code)
    }

    sendRawBody(body, code = 200){
        this.setStatus(code)
        this.res.send(body)
    }

    sendJson(body, code = 200){
        this.setStatus(code)
        this.res.json(body)
    }

    setHeader(kv){
        this.res.set(kv)
    }
    
    setHeader(key, value){
        this.setHeader({
            [key] : value
        })
    }

    dispatch(){
        this.res.end()
    }
}


module.exports = Response