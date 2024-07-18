import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://vikas_gaur:12345@cluster0.okqemjq.mongodb.net/food-del').then(console.log("DB connected successfully"))
}

 