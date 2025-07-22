import mongoose from "mongoose";

const db=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully✅");
        
    } catch (error) {
        console.error("Error in database connection");
        process.exit(1);
    }
}
export default db;