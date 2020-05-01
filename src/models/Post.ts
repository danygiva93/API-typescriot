import {Schema, model} from 'mongoose';

const PostSchema = new Schema({
    title:{type: String, requiere: true},
    url:{type: String, requiere: true, unique: true, lowercase: true},
    content: {type: String, requiere: true},
    Image: {type: String},
    createdAt:{type: Date, default:Date.now},
    uodatedAT: Date
});

export default model('Post', PostSchema);