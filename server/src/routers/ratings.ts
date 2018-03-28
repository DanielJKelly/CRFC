import { Router } from 'express';
import controllers from '../controllers/ratings';
import complete from '../middleware/response.mw';

let router = Router();

router 
    .post('/', controllers.create, complete)
    .delete('/', controllers.destroy, complete)
    .put('/', controllers.update, complete)
    .get('/:id', controllers.readByUser, complete)
    .get('/movies/:id', controllers.readByMovie, complete);
  
export default router;