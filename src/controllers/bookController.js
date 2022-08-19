const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function(req,res){
    const book = req.body
    if(!book.author||!book.publisher) return res.send(`authorId/publisherID is required`)
    const author=await authorModel.find({_id:book.author})
    if(author.length==0) return res.send(`Invalid authorId/author is not present`)
    const publisher=await publisherModel.find({_id:book.publisher})
    if(publisher.length==0) return res.send(`Invalid publisherId/publisher is not present`)
    const data=await bookModel.create(book)
    return res.send({Book:data})
}

const getBook = async function(req,res){
    const book = await bookModel.find().populate("author").populate("publisher")
    res.send({allBooks:book})
}

module.exports={createBook,getBook}