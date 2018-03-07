import { Router } from 'express';
import controllers from '../controllers/users';
import complete from '../middleware/response.mw';

let router = Router();

router 
    .get('/', controllers.all, complete);

export default router;