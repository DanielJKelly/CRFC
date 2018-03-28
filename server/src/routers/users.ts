import { Router } from 'express';
import controllers from '../controllers/users';
import complete from '../middleware/response.mw';
import async from '../middleware/async.mw';


let router = Router();

router 
    .get('/', async.asyncHandler(controllers.all), complete)
    .post('/', async.asyncHandler(controllers.create), complete);

export default router;