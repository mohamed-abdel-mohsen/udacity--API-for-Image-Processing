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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const sharpFunction_1 = __importDefault(require("../../helpers/sharpFunction"));
const resizingRoter = express_1.default.Router();
const starter = (req, res, next) => {
    if (req.query.filename && req.query.width && req.query.height) {
        next();
    }
    else {
        res.send('Please Enter the Filename, width and height');
    }
};
const checkingFileName = (req, res, next) => {
    const inputFile = req.query.filename;
    const file = `${__dirname}/../../../images/full/${inputFile}`;
    const checkingDir = (f) => __awaiter(void 0, void 0, void 0, function* () {
        const exists = yield fs_extra_1.default.pathExists(f);
        if (!exists) {
            res.send('File Name is invalid Try Again ');
        }
        else {
            next();
        }
    });
    checkingDir(file);
};
const checkingInput = (req, res, next) => {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        res.send(`Please Enter Valid Number !...
    and it can't be negative or zero`);
    }
    else {
        next();
    }
};
const resize = (req, res, next) => {
    const inputFile = `${req.query.filename}`;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const outputFile = `${width}-${height}${inputFile}`;
    const file = `${__dirname}/../../../images/thumb/${outputFile}`;
    const checkingThumbDir = (x) => __awaiter(void 0, void 0, void 0, function* () {
        const exists = yield fs_extra_1.default.pathExists(x);
        if (!exists) {
            const renderImg = () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, sharpFunction_1.default)(inputFile, outputFile, width, height);
                next();
            });
            renderImg();
        }
        else {
            const returnImg = yield fs_extra_1.default.readFile(file);
            res.end(returnImg);
        }
    });
    checkingThumbDir(file);
};
const showRenderImg = (req, res) => {
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const inputFile = `${req.query.filename}`;
    const outputFile = `${width}-${height}${inputFile}`;
    const file = `${__dirname}/../../../images/thumb/${outputFile}`;
    const checkingImg = (f) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const exists = yield fs_extra_1.default.pathExists(f);
            if (exists) {
                const rend = yield fs_extra_1.default.readFile(f);
                res.end(rend);
            }
        }
        catch (err) {
            throw console.log(err);
        }
    });
    checkingImg(file);
};
resizingRoter.get('/', starter, checkingFileName, checkingInput, resize, showRenderImg);
exports.default = resizingRoter;
