import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
    }
    catch(error){
        console.log("MongoDB Connection Error : ", error)
    }
};