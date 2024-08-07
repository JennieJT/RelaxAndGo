import mongoose from "mongoose";

const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    content: { type: String, required: true },
    status: { type: Boolean, required: true },
    type: { type: [String], required: true },
    complete:{type:Number, default: 0},
    times:{type:Number, deault:0},
    completeLogs: [{ type: Date }],
  },
  { 
    timestamps: true, 
    toJSON: { getters: true } 
  }
);

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
