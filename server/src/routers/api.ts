import { Router, Request, Response, NextFunction } from 'express';
import users from './users';
import movies from './movies';
import search from './search';
import recommendations from './recommendations';
import ratings from './ratings';
import lists from './lists';
import recrequests from './recrequests';

const router = Router();

router
    .use('/users', users)
    .use('/movies', movies)
    .use('/search', search)
    .use('/recommendations', recommendations)
    .use('/ratings', ratings)
    .use('/lists', lists)
    .use('/recRequests', recrequests);

export default router;