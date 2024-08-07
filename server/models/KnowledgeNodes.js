import mongoose from 'mongoose';

const {Schema} = mongoose;
const KnowledgeNodesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    complete:{
        type:Number,
        default: 0,
    },
    type:{
        type:Array,
        default:[],
    },
    status:{
        type:Boolean,
        default:false,
    },
    times:{
        type:Number,
        default: 0,
    },
    completeLogs: [{ type: Date }]
},
    {
        timestamps: true, 
        toJSON: {getters: true}
    }
);

const KnowledgeNodes = mongoose.model('KnowledgeNodes', KnowledgeNodesSchema);

export default KnowledgeNodes