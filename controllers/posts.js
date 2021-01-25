const database = require('../models/index');



class Db {
    
  static async listAllPost(req,res){

        try{
            const response = await database.Posts.findAll()


            return res.status(200).json(response)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }

    static async inserPost(req,res){

        var NewPost = req.body
        
        try{
           
            const response = await database.Posts.create({ user_id: NewPost.id, text: NewPost.text });


            return res.status(201).json(response)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Db



