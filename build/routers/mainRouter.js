"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizingRouter_1 = __importDefault(require("./api/resizingRouter"));
const imageRouter = express_1.default.Router();
imageRouter.get('/', (req, res) => {
    res.status(200).send('main router');
});
imageRouter.use('/resize', resizingRouter_1.default);
exports.default = imageRouter;
