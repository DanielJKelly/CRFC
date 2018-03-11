import { Router, Request, Response, NextFunction } from 'express';
import users from './users';
import movies from './movies';
import search from './search';

const router = Router();

router
    .use('/users', users)
    .use('/movies', movies)
    .use('/search', search);

export default router;