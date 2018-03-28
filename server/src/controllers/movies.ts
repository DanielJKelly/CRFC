import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/movies';

async function readFromApi(req: Request, res: Response, next: NextFunction) {
    let movie = await procedures.readFromApi(req.params.id);
    
    res.body = movie;
    
    next();
}

async function create(req: Request, res: Response, next: NextFunction) {
    let id = await procedures.create(req.body)
    
    res.body = id;
    
    next();
}

export default {
    readFromApi,
    create
};