import { Router } from 'express';
import { identityRouter } from './identity.js';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the API');
});

apiRouter.use('/identity', identityRouter);

export {apiRouter};
