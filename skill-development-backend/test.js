const connection = require('./mongodb/connection');

connection().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data)
    })
})
