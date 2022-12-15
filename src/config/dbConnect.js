import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://alura:123@alura.podwobx.mongodb.net/alura-node"); 
//URL pego no site, connect> Connect your application 
// URL Original: mongodb+srv://alura:<password>@alura.podwobx.mongodb.net/?retryWrites=true&w=majority

let dbConnect = mongoose.connection;

export default dbConnect;