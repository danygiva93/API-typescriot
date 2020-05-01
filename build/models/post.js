"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, requiere: true },
    url: { type: String, requiere: true, unique: true, lowercase: true },
    content: { type: String, requiere: true },
    Image: { type: String },
    createdAt: { type: Date, default: Date.now },
    uodatedAT: Date
});
exports.default = mongoose_1.model('Post', PostSchema);
