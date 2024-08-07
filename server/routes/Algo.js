import express from "express";
import { Algo } from "../models/Algo.js";
import mongoose from 'mongoose';

const AlgoRouter = express.Router();
const { ObjectId } = mongoose.Types;

//create
AlgoRouter.post("/algo", async (req, res) => {
  try {
    const algo = new Algo(req.body);
    await algo.save();
    res.status(201).send(algo);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get
AlgoRouter.get("/algo", async (req, res) => {
  try {
    const algos = await Algo.find();
    res.status(200).json(algos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//update
AlgoRouter.patch("/algo/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const objectId = new ObjectId(id);
    const updatedAlgo = await Algo.findByIdAndUpdate(
      objectId,
      { status },
      { new: true }
    );
    res.status(200).json(updatedAlgo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete

export default AlgoRouter;