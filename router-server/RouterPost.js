"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = require("express");
const Posts_1 = require("../models-server/Posts");
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const NewPost = new Posts_1.Posts(req.query);
        const result = yield NewPost.save();
        if (!result)
            throw Error('не сохранилось');
        res.status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getItems = yield Posts_1.Posts.find();
        if (!getItems)
            throw new Error('no items');
        res.status(200).send(getItems);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Posts_1.Posts.updateOne({ "_id": req.params.id }, { $set: req.query });
        if (!result)
            throw new Error('no items');
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Posts_1.Posts.deleteOne({ "_id": req.params.id }, { $set: req.query });
        if (!result)
            throw new Error('no items');
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
exports.PostRouter = router;
