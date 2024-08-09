import mongoose from 'mongoose';

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.mdjtp.mongodb.net:27017,ecommerce-web-shard-00-01.mdjtp.mongodb.net:27017,ecommerce-web-shard-00-02.mdjtp.mongodb.net:27017/?ssl=true&replicaSet=atlas-94i7tr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;