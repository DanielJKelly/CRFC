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

async function all(req: Request, res: Response, next: NextFunction) {
    let movies = await procedures.all();

    res.body = movies;

    next();
}

async function readByDirector(req: Request, res: Response, next: NextFunction) {
    console.log('params: ', req.params);
    let director = { director: req.params.director };
    
    let movies = await procedures.readByDirector(director);

    res.body = movies;

    next();
}

async function destroy(req: Request, res: Response, next: NextFunction) {
    await procedures.destroy(req.body);

    res.body = true;

    next();
}

async function readByUser(req: Request, res: Response, next: NextFunction) {
    let userid = { id: req.params.id };

    let movies = await procedures.readByUser(userid);

    res.body = movies;

    next();
}

async function update(req: Request, res: Response, next: NextFunction) {
    await procedures.update(req.body);

    res.body = true;

    next();
}

export default {
    readFromApi,
    create,
    all,
    readByDirector,
    destroy,
    readByUser, 
    update
};