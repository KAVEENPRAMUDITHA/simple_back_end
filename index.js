import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(
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
