import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import userRouter from './routes/userRouter.js';

const app = express();

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */

mongoose.connect(process.env.MONGODB_URL).then(
    () => {
        console.log("Connected to the database");
    }
).catch(
    () => {
        console.log("Connection failed");
    }
)


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Simple Backend API',
            version: '1.0.0',
            description: 'API documentation for the Simple Backend application',
        },
    },
    apis: ['./index.js', './routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(bodyParser.json());

app.use("/api/user", userRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(6000,
    () => {
        console.log("Server is running on port 6000");
    }
)
