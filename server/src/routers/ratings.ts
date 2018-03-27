import { Router } from 'express';
import controllers from '../controllers/ratings';
import complete from '../middleware/response.mw';

let router = Router();

router 
    .post('/:movieid', controllers.create, complete)
    .delete('/', controllers.destroy, complete);
  
export default router;