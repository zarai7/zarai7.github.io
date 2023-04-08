const mongo=require("mongoose")
const userSchema=new mongo.Schema({

    nom:{type:String},
    prenom:{type:String},
    age:{type:Number}

})

const userModel=mongo.model("user",userSchema)
module.exports=userModel