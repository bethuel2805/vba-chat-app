import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error of connection db : ",error.message);
    }
}

export default connectDB;