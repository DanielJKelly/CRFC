import { Router, Request, Response, NextFunction } from 'express';
import users from './users';
import movies from './movies';

const router = Router();

router
    .use('/users', users)
    .use('/movies', movies);

export default router;