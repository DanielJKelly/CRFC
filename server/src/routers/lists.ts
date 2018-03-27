import { Router } from 'express';
import controllers from '../controllers/lists';
import complete from '../middleware/response.mw';

const router = Router();

router
    .get('/:userid', controllers.readByUser, complete)
    .post('/', controllers.create, complete);

export default router;