import { Router } from 'express';
import controllers from '../controllers/recommendations';
import complete from '../middleware/response.mw';

let router = Router();

router 
    .post('/:id', controllers.create, complete)
    .get('/:recipientid', controllers.readByRecipient, complete);

export default router;