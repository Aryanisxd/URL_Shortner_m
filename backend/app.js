import express from 'express';
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


app.listen(3000, () => {
    console.log('Server is running on port  on https://localhost:3000');
}
);

