import express, { Request, Response } from 'express';
import resizingRoter from './api/resizingRouter';
const imageRouter = express.Router();

imageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('main router');
});

imageRouter.use('/resize', resizingRoter);

export default imageRouter;
