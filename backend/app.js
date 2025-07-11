import express from 'express';
import dotenv from 'dotenv';
dotenv.config( "../.env");
import mongoose from 'mongoose';
import connectDB from './src/config/mongo.config.js';

//getting nanoid from nanoid to make it smaller in chars 
import { nanoid } from 'nanoid';

//models
import ShortUrl from './src/models/shorturl.model.js';
import shortUrlRoute from './src/routes/shortUrl.route.js';

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));







app.use('/api/v1/create', shortUrlRoute);

app.get('/:id' , async (req,res) => {
    const {id} = req.params;
    const url = await ShortUrl.findOne({shortUrl: id});
    if (url) {
        res.redirect(url.fullUrl);
    } else {
        return res.sendStatus(404);
    }
    
})



























async function connection (){

    try {
       await connectDB();

        app.listen(3001, () => {
    console.log('Server is running on port  on https://localhost:3001');
}
);
        
    } catch (error) {
        console.log(error);
        
    }

}
connection();
