import mongoose from "mongoose";

const foodShema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
 

})

// if model availible then use it otherwise it will create
const foodModel = mongoose.models.food || mongoose.model("food",foodShema);

export default foodModel;