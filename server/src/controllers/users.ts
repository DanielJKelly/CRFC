import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/users';

async function all(req: Request, res: Response, next: NextFunction) {
    let result = await procedures.all()
    res.promise = Promise.resolve(result);
    
    next();
}

async function create(req: Request, res: Response, next: NextFunction) {
    let result = await procedures.create(req.body);
    res.promise = Promise.resolve(result);

    next();
}



export default {
    all,
    create
};