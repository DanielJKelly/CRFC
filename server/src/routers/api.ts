import { Router, Request, Response, NextFunction } from 'express';
import users from './users';

const router = Router();

router
    .use('/users', users);

export default router;