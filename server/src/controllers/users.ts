import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/users';

async function all(req: Request, res: Response, next: NextFunction) {
    let users = await procedures.all()
    
    res.body = users;
    
    next();
}

async function create(req: Request, res: Response, next: NextFunction) {
    let id = await procedures.create(req.body);
    
    res.body = id;
    
    next();
}



export default {
    all,
    create
};