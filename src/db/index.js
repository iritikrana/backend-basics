import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB successfully connected at ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`ERR: DB connection has FAILED`, error);
    }
}

export default connectDB