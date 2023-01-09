import mongoose from "mongoose";
mongoose.set('strictQuery', false);

// import log from '../logger';

async function connectDb() {
    const uri = process.env.BD_MONG_URI;

    if(!uri) {
        throw new Error('MONGO_DB_URI is not defined');
    }
    
     
    try {
        mongoose.connect(uri)
        console.log('conneted to database');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;