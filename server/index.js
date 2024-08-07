import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import helmet from 'helmet';
import knowledgeNodesRouter from "./routes/KnowledgeNodes.js";
import KnowledgeNodes from "./models/KnowledgeNodes.js";
import { ALGOS, KNOWLEDGENODES } from "./mock/preMongoData.js";
import TasksRouter from "./routes/Tasks.js";
import Tasks from './models/Tasks.js';
import {TASKS} from './mock/preMongoData.js';
import AlgoRouter from "./routes/Algo.js";
import { Algo } from "./models/Algo.js";

/* CONFIGURATION */
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginEmbedderPolicy({policy: 'unsafe-none'}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


/* ROUTES */
app.use('/api', knowledgeNodesRouter)
app.use('/api', TasksRouter)
app.use('/api', AlgoRouter);
app.get('/', (req, res) => {
    // Logic to handle the root request
    res.send('Home Page');
});

/* MONGOOSE */
const PORT = process.env.PORT || 9000
mongoose
.connect(process.env.MONGO_URL)
.then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
    /**Add data one time only */
    //KnowledgeNodes.insertMany(KNOWLEDGENODES)
    // Tasks.insertMany(TASKS)
   //Algo.insertMany(ALGOS);
   //Algo.deleteMany();
})
.catch((error) => console.log(`${error} did not connect`))
