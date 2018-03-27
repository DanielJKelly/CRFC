import { Router } from 'express';
import controllers from '../controllers/movies';
import complete from '../middleware/response.mw';

const router = Router();

router
    .get('/:id', controllers.readFromApi, complete)
    .post('/', controllers.create, complete);

export default router;