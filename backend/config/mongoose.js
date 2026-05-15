import mongoose from 'mongoose';
const connectDb = async()=> {
    mongoose.connection.on('connected', ()=> {
        console.log('Mongo_Db DataBase connected')
    })

await mongoose.connect(`${process.env.MONGODB_URL}`);
// await mongoose.connect('mongodb://127.0.0.1:27017/bankIslamiPakistan');

}

export default connectDb;



