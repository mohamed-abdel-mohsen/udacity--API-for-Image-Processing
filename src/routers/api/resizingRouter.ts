import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs-extra';
import size from '../../helpers/sharpFunction';
const resizingRoter = express.Router();

const starter = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.filename && req.query.width && req.query.height) {
    next();
  } else {
    res.send('Please Enter the Filename, width and height');
  }
};

const checkingFileName = (req: Request, res: Response, next: NextFunction) => {
  const inputFile = req.query.filename;
  const file = `${__dirname}/../../../images/full/${inputFile}`;
  const checkingDir = async (f: string) => {
    const exists = await fs.pathExists(f);
    if (!exists) {
      res.send('File Name is invalid Try Again ');
    } else {
      next();
    }
  };

  checkingDir(file);
};

const checkingInput = (req: Request, res: Response, next: NextFunction) => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res.send(`Please Enter Valid Number !...
    and it can't be negative or zero`);
  } else {
    next();
  }
};

const resize = (req: Request, res: Response, next: NextFunction) => {
  const inputFile = `${req.query.filename}`;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const outputFile = `${width}-${height}${inputFile}`;
  const file = `${__dirname}/../../../images/thumb/${outputFile}`;

  const checkingThumbDir = async (x: string) => {
    const exists = await fs.pathExists(x);
    if (!exists) {
      const renderImg = async () => {
        await size(inputFile, outputFile, width, height);
        next();
      };
      renderImg();
    } else {
      const returnImg = await fs.readFile(file);
      res.end(returnImg);
    }
  };

  checkingThumbDir(file);
};

const showRenderImg = (req: Request, res: Response) => {
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const inputFile = `${req.query.filename}`;
  const outputFile = `${width}-${height}${inputFile}`;
  const file = `${__dirname}/../../../images/thumb/${outputFile}`;
  const checkingImg = async (f: string) => {
    try {
      const exists = await fs.pathExists(f);
      if (exists) {
        const rend = await fs.readFile(f);
        res.end(rend);
      }
    } catch (err) {
      throw console.log(err);
    }
  };

  checkingImg(file);
};

resizingRoter.get(
  '/',
  starter,
  checkingFileName,
  checkingInput,
  resize,
  showRenderImg
);

export default resizingRoter;
