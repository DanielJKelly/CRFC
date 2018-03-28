import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/recommendations';

async function create(req: Request, res: Response, next: NextFunction) {
    let id = await procedures.create(req.body);
    
    res.body = id;

    next();
}

async function update(req: Request, res: Response, next: NextFunction) {
    let recommendationid = { id: req.params.id };
    
    let id = await procedures.update(recommendationid);
    
    res.body = id;

    next();
}

async function readByRecipient(req: Request, res: Response, next: NextFunction) {
    let recipientid = { id: req.params.id };
    
    let recommendations = await procedures.readByRecipient(recipientid);
    
    res.body = recommendations;
    
    next();
}

async function readByRecommender(req: Request, res: Response, next: NextFunction) {
    let recommenderid = { id: req.params.id };
    
    let recommendations = await procedures.readByRecommender(recommenderid);
    
    res.body = recommendations;

    next();
}
export default {
    create,
    update,
    readByRecipient,
    readByRecommender
};