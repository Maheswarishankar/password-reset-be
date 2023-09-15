import express from 'express'
import * as dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import userRouter from './routes/user.route.js'
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(" Sever Started Successfully!!!❤️")
});


// MongoDB Connection.............................
const MONGO_URL = process.env.DB_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('Mongo is Connected');

//Routes
app.use('/user', userRouter);

app.listen(PORT, () => console.log(` Server Running Successfully on ${PORT}`));

export { client }