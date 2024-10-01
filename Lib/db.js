import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

 const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.DB_connect
        );
        console.log('db connect..');
        
    } catch (error) {
        console.log('21211');
        
        console.error(error.message);
        process.exit(1);
        
    }
};

export default connectDB;