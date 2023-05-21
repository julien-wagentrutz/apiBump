import { Router } from 'express';
import { identityController } from '../../controllers/api/identity.js';

const identityRouter = Router();

identityRouter.post('/generate', identityController.generate);

export {identityRouter};