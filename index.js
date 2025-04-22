import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js';

const app = express();

mongoose.connect("mongodb+srv://admin:1234@cicd.peldgzz.mongodb.net/?retryWrites=true&w=majority&appName=CICD").then(
    () => {
        console.log("Connected to the database");
    }
).catch(
    () => {
        console.log("Connection failed");
    }
)


app.use(bodyParser.json());

app.use("/api/user", userRouter)



app.listen(6000,
    () => {
        console.log("Server is running on port 6000");
    }
)
