import { Router } from 'express';
import controllers from '../controllers/lists';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

const router = Router();

router
    .get('/:id', asyncWrapper(controllers.readById), complete)
    .get('/users/:id', asyncWrapper(controllers.readByUser), complete)
    .post('/', asyncWrapper(controllers.create), complete)
    .post('/:id', asyncWrapper(controllers.createListItem), complete)
    .delete('/', asyncWrapper(controllers.destroy), complete)
    .delete('/:id', asyncWrapper(controllers.destroyFromList), complete);

export default router;