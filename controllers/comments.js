const database = require('../models/index');


class Db {
    
    static async listAllComments(req,res){
  
          try{
              const response = await database.Comments.findAll()
  
  
              return res.status(200).json(response)
          }
          catch(error){
              return res.status(500).json(error)
          }
      }
  
      static async inserComments(req,res){
  
          var NewPost = req.body
          
          try{
             
              const response = await database.Comments.create({ post_id	: NewPost.post_id,user_id:NewPost.user_id, text: NewPost.text });
  
  
              return res.status(201).json(response)
          }
          catch(error){
              return res.status(500).json(error.message)
          }
      }
  }
  
  module.exports = Db