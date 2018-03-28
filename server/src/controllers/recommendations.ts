import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/recommendations';

async function create(req: Request, res: Response, next: NextFunction) {
    let result = await procedures.create(req.body);
    res.promise = Promise.resolve(result);

    next();
}

async function update(req: Request, res: Response, next: NextFunction) {
    let result = await procedures.update(req.params.id);
    res.promise = Promise.resolve(result);

    next();
}

async function readByRecipient(req: Request, res: Response, next: NextFunction) {
    let result = procedures.readByRecipient(req.params.recipientid);
    res.promise = Promise.resolve(result);
    
    next();
}

async function readByRecommender(req: Request, res: Response, next: NextFunction) {
    let result = procedures.readByRecommender(req.params.recommenderid);
    res.promise = Promise.resolve(result);
    
    next();
}
export default {
    create,
    update,
    readByRecipient,
    readByRecommender
};