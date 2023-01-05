'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const sharp_1 = __importDefault(require('sharp'));
const size = (inPut, outPut, width, height) => {
  (0, sharp_1.default)(`${__dirname}/../../../images/full/${inPut}`)
    .resize(width, height)
    .toFile(`${__dirname}/../../../images/thumb/${outPut}`);
};
exports.default = size;
