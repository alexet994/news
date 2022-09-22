"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model_Posts = void 0;
const mongoose_1 = require("mongoose");
const modelPosts = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
});
exports.model_Posts = (0, mongoose_1.model)('post', modelPosts);
