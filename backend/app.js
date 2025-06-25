import express from 'express';
import dotenv from 'dotenv';
dotenv.config( "../.env");
import mongoose from 'mongoose';
import connectDB from './src/config/mongo.config.js';




const app = express();



//getting nanoid from nanoid to make it smaller in chars 
import { nanoid } from 'nanoid';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/create', (req, res) => {
    const {Url} = req.body;
    console.log(Url); 


    res.send({nanoid: nanoid(7)});
});





async function connection (){

    try {
       await connectDB();

        app.listen(3000, () => {
    console.log('Server is running on port  on https://localhost:3000');
}
);
        
    } catch (error) {
        console.log(error);
        
    }

}
connection();
