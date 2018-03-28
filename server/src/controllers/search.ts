import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/search';

async function search(req: Request, res: Response, next: NextFunction) {
    let results = await procedures.search(req.params.term);
    
    res.body = results;
    
    next();
}

export default {
    search
};