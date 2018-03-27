import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/lists';

function readByUser(req: Request, res: Response, next: NextFunction) {
    const userid = { userid: req.params.userid }
    res.promise = procedures.readByUser(userid)
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
    const data = Object.assign({}, req.params);

    res.promise = procedures.readById(data)
        .then((list) => {
            return list;
        });
    
    next();
}

function createListItem(req: Request, res: Response, next: NextFunction) {
    const data = Object.assign({}, req.body, req.params);
    
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
    const data = Object.assign({}, req.body);

    res.promise = procedures.destroy(data)
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