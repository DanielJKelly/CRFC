import { Router } from 'express';
import controllers from '../controllers/recommendations';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

let router = Router();

router 
    .post('/', asyncWrapper(controllers.create), complete)
    .get('/recipient/:id', asyncWrapper(controllers.readByRecipient), complete)
    .get('/recommender/:id', asyncWrapper(controllers.readByRecommender), complete)
    .put('/:id', asyncWrapper(controllers.update), complete);

export default router;