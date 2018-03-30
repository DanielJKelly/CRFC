import { Router } from 'express';
import controllers from '../controllers/users';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';


let router = Router();

router 
    .get('/', asyncWrapper(controllers.all), complete)
    .post('/', asyncWrapper(controllers.create), complete)
    .get('/movies/:id', asyncWrapper(controllers.readByMovie), complete);

export default router;