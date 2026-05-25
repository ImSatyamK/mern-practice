import mongoose from 'mongoose';

export async function connectDB() {
    const uri: string | undefined = process.env.MONGO_URI

    if (!uri) {
        console.error('MONGO_URI is not defined in environment variables');
        process.exit(1); // Exit the process with an error code
    }

    try{

        const conn = await mongoose.connect(uri);
        console.log('Connected to the database', conn.connection.host);

    }catch(error){

        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with an error code

    }
}