import { Router } from 'express';
import controllers from '../controllers/recommendations';
import complete from '../middleware/response.mw';

let router = Router();

router 
    .post('/:id', controllers.create, complete)
    .get('/recipient/:recipientid', controllers.readByRecipient, complete)
    // .get('/recommender/:recommenderid', controllers.readByRecommender, complete);

export default router;