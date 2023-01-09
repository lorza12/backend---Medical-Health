import mongoose from "mongoose";
mongoose.set('strictQuery', false);

import log from '../logger';

async function connectDb() {
    const uri = process.env.BD_MONG_URI;

    if(!uri) {
        throw new Error('MONGO_DB_URI is not defined');
    }
    
     
    try {
        mongoose.connect(uri)
        log.info('conneted to database');
    } catch (error) {
        log.error(error);
        process.exit(1);
    }
}

export default connectDb;