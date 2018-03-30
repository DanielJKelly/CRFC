import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/lists';
import { isUndefined } from 'lodash';

async function readByUser(req: Request, res: Response, next: NextFunction) {
    let userid = { id: req.params.id };
    
    let lists = await procedures.readByUser(userid);
    
    res.body = lists;
    
    next();
}

async function create(req: Request, res: Response, next: NextFunction) {
    let model = req.body;

    let id = await procedures.create(req.body);

    res.body = id;
   
    next();
}

async function readById(req: Request, res: Response, next: NextFunction) {
    let listid = { id: req.params.id };
    
    let listOfMovies = await procedures.readById(listid);

    res.body = listOfMovies;
   
    next();
}

async function createListItem(req: Request, res: Response, next: NextFunction) {
    let movieid = { id: req.params.id };
    let model = Object.assign({}, req.body, movieid);
    
    if (isUndefined(model.ranking)) {
        model.ranking = null;
    }

    let id = await procedures.createListItem(model);

    res.body = id;
    
    next();
}

async function destroy(req: Request, res: Response, next: NextFunction) {
    await procedures.destroy(req.body);

    res.body = true;
    
    next();
}

async function destroyFromList(req: Request, res: Response, next: NextFunction) {
    let listid = { id: req.params.id };
    let model = Object.assign({}, req.body, listid);
    
    await procedures.destroyFromList(model);

    res.body = true;
    
    next();
}

async function update(req: Request, res: Response, next: NextFunction) {
    await procedures.update(req.body);

    res.body = true;
    
    next();
}

export default {
    readByUser,
    create,
    readById,
    createListItem,
    destroy,
    destroyFromList,
    update
}