import { Router } from 'express';
import controllers from '../controllers/search';
import complete from '../middleware/response.mw';

const router = Router();

router
    .get('/movie/:term', controllers.search, complete);

export default router;