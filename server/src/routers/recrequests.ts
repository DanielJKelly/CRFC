import { Router } from 'express';
import controllers from '../controllers/recrequests';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

let router = Router();

router 
    .post('/', asyncWrapper(controllers.create), complete)
    .get('/requester/:id', asyncWrapper(controllers.readByRequester), complete)
    .get('/recommender/:id', asyncWrapper(controllers.readByRecommender), complete)
    .put('/:id', asyncWrapper(controllers.update), complete)
    .delete('/', asyncWrapper(controllers.destroy), complete);

export default router;