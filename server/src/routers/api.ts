import { Router, Request, Response, NextFunction } from 'express';
import users from './users';
import movies from './movies';
import search from './search';
import recommendations from './recommendations';
import ratings from './ratings';

const router = Router();

router
    .use('/users', users)
    .use('/movies', movies)
    .use('/search', search)
    .use('/recommendations', recommendations)
    .use('/ratings', ratings);

export default router;