import { Router } from 'express';
import controllers from '../controllers/ratings';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

let router = Router();

router 
    .post('/', asyncWrapper(controllers.create), complete)
    .delete('/', asyncWrapper(controllers.destroy), complete)
    .put('/', asyncWrapper(controllers.update), complete)
    .get('/users/:id', asyncWrapper(controllers.readByUser), complete)
    .get('/movies/:id', asyncWrapper(controllers.readByMovie), complete);
  
export default router;