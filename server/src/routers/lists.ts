import { Router } from 'express';
import controllers from '../controllers/lists';
import complete from '../middleware/response.mw';

const router = Router();

router
    .get('/:id', controllers.readById, complete)
    .get('/users/:id', controllers.readByUser, complete)
    .post('/', controllers.create, complete)
    .post('/:id', controllers.createListItem, complete)
    .delete('/', controllers.destroy, complete)
    .delete('/:id', controllers.destroyFromList, complete);

export default router;