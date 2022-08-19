const publisherModel = require("../models/publisherModel")


const createPublisher = async function(req,res){
    const publisher = req.body
    const data = await publisherModel.create(publisher)
    res.send({Publisher:data})
}

module.exports.createPublisher=createPublisher