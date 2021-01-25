const database = require('../models/index');



class Db {
    
  static async listAll(req,res){

        try{
            const response = await database.Users.findAll()


            return res.status(200).json(response)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }

    static async inserUser(req,res){

        var NewUser = req.body
        console.log(req.body)
        try{
           
            const response = await database.Users.create({ firstName: NewUser.nome, email: NewUser.email,password:NewUser.senha });


            return res.status(201).json(response)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = Db



