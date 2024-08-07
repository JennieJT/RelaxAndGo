import express from 'express';
import KnowledgeNodes from '../models/KnowledgeNodes.js';

const knowledgeNodesRouter = express.Router();

knowledgeNodesRouter.get("/knowledgeNodes", async(req, res) => {
    try{
        const knowledgeNodes = await KnowledgeNodes.find();
        res.status(200).json(knowledgeNodes)
    }catch(error){
        res.status(404).json({message: error.message});
    }
});

export default knowledgeNodesRouter;