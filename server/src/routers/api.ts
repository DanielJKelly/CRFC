import { Router, Request, Response, NextFunction } from 'express';
import users from './users';
import movies from './movies';
import search from './search';
import recommendations from './recommendations';

const router = Router();

router
    .use('/users', users)
    .use('/movies', movies)
    .use('/search', search)
    .use('/recommendations', recommendations);

export default router;