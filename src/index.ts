import express from 'express';
import imageRouter from './routers/mainRouter';
const app = express();

app.use('/image', imageRouter);

/*
  Building Server 
*/
const port = 8000;
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
