"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.MONGO = 'mongodb://127.0.0.1:27017/web_blog?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4';
