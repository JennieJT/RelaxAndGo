import mongoose from 'mongoose';

const { Schema } = mongoose;
const AlgoSchema = new Schema({
    id_leetcode: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    content:{
        type:String,
    },
    type: {
        type: Array,
    },
    difficulty: {
        type: String,
    },
    status:{
        type: Boolean,
        default: false,
    },
    week:{
        type: String,
    },
    complete:{
        type:Number,
        default: 0,
    },
    times:{
        type:Number,
        default: 0,
    },
    completeLogs: [{ type: Date }],
},
{
    timestamps: true, 
    toJSON: { getters: true }
});

//middleware to check status change
AlgoSchema.pre('save', async function(next){
    if(this.isModified('status') && this.status === true){
        this.complete += 1;
        this.success += 1;
    }
    console.log("1st")
    next();
})

AlgoSchema.pre('save', async(next)=>{
    console.log("hehehe");
    next();
})

export const Algo = mongoose.model('algo-codings', AlgoSchema);