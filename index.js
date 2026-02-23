import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';


dotenv.config();


const app=express();

app.use(cors());
app.use(express.json());

connectDB();


app.get('/',(req,res)=>{
    res.send('Hello World');
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});