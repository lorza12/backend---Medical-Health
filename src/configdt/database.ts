import mongoose from "mongoose";

async function connectDb() {
    const uri = 'mongodb+srv://dev:SarOkOqAo6EJSZh4@medical-health.gf7ova9.mongodb.net/medical-health?retryWrites=true&w=majority';
    
    try {
        mongoose.connect(uri)
        console.log('conneted to database');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;