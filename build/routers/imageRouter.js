'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const imageRouter = express_1.default.Router();
imageRouter.get('/', (req, res) => {
  const width = req.query.width;
  if (Number(width) !== NaN) {
    res.send(` your input is number `);
  } else {
    res.send(` your input is not number `);
  }
});
exports.default = imageRouter;
