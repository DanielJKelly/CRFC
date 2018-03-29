import { Router } from 'express';
import controllers from '../controllers/movies';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

const router = Router();

router
    .get('/:id', asyncWrapper(controllers.readFromApi), complete)
    .post('/', asyncWrapper(controllers.create), complete)
    .get('/', asyncWrapper(controllers.all), complete)
    .get('/directors/:director', asyncWrapper(controllers.readByDirector), complete)
    .delete('/', asyncWrapper(controllers.destroy), complete);

export default router;