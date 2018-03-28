import { Router } from 'express';
import controllers from '../controllers/search';
import complete from '../middleware/response.mw';
import asyncWrapper from '../middleware/async.mw';

const router = Router();

router
    .get('/movie/:term', asyncWrapper(controllers.search), complete);

export default router;