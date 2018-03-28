import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/lists';

function readByUser(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.readByUser(req.params)
        .then((lists) => {
            return lists;
        });
    
    next();
}

function create(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.create(req.body)
        .then((id) => {
            return id;
        });
    
    next();
}

function readById(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.readById(req.params)
        .then((list) => {
            return list;
        });
    
    next();
}

function createListItem(req: Request, res: Response, next: NextFunction) {
    const data = Object.assign({}, req.body, req.params);
    console.log('data: ', data);
    
    if (!data.ranking) {
        data.ranking = null;
    }

    res.promise = procedures.createListItem(data)
        .then((id) => {
            return id;
        });
    
    next();
}

function destroy(req: Request, res: Response, next: NextFunction) {
    res.promise = procedures.destroy(req.body)
        .then(() => {
            return true;
        });
    
    next();
}

function destroyFromList(req: Request, res: Response, next: NextFunction) {
    const data = Object.assign({}, req.body, req.params);
    
    res.promise = procedures.destroyFromList(data)
        .then(() => {
            return true;
        });
    
    next();

}

export default {
    readByUser,
    create,
    readById,
    createListItem,
    destroy,
    destroyFromList
}