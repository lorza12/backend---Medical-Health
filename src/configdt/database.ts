import mongoose from "mongoose";

async function connectDb() {
    const uri = process.env.BD_MONG_URI;
     
    try {
        mongoose.connect(uri)
        console.log('conneted to database');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;