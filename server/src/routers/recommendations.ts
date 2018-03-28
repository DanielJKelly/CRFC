import { Router } from 'express';
import controllers from '../controllers/recommendations';
import complete from '../middleware/response.mw';
import async from '../middleware/async.mw';

let router = Router();

router 
    .post('/', async.asyncHandler(controllers.create), complete)
    .get('/recipient/:recipientid', async.asyncHandler(controllers.readByRecipient), complete)
    .get('/recommender/:recommenderid', async.asyncHandler(controllers.readByRecommender), complete)
    .put('/:id', async.asyncHandler(controllers.update), complete);

export default router;