import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/recrequests';

async function create(req: Request, res: Response, next: NextFunction) {
    let id = await procedures.create(req.body);
    
    res.body = id;

    next();
}

async function update(req: Request, res: Response, next: NextFunction) {
    let recrequestid = { id: req.params.id };
    
    let id = await procedures.update(recrequestid);
    
    res.body = id;

    next();
}

async function readByRequester(req: Request, res: Response, next: NextFunction) {
    let requesterid = { id: req.params.id };
    
    let recrequests = await procedures.readByRequester(requesterid);
    
    res.body = recrequests;
    
    next();
}

async function readByRecommender(req: Request, res: Response, next: NextFunction) {
    let recommenderid = { id: req.params.id };
    
    let recrequests = await procedures.readByRecommender(recommenderid);
    
    res.body = recrequests;

    next();
}

async function destroy(req: Request, res: Response, next: NextFunction) {
    await procedures.destroy(req.body);

    res.body = true;

    next();
}
export default {
    create,
    update,
    readByRequester,
    readByRecommender,
    destroy
};