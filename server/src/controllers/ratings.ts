import { Request, Response, NextFunction } from 'express';
import procedures from '../procedures/ratings';

async function create(req: Request, res: Response, next: NextFunction) {
    await procedures.create(req.body);

    res.body = true;

    next();
}

async function destroy(req: Request, res: Response, next: NextFunction) {
    await procedures.destroy(req.body);

    res.body = true;
        
    next();

}

async function update(req: Request, res: Response, next: NextFunction) {
    await procedures.update(req.body);

    res.body = true;
        
    next();
}

async function readByUser(req: Request, res: Response, next: NextFunction) {
    let userid = { id: req.params.id };
    
    let moviesWithRatings = await procedures.readByUser(userid);

    res.body = moviesWithRatings;
        
    next();
}

async function readByMovie(req: Request, res: Response, next: NextFunction) {
    let movieid = { id: req.params.id };
    
    let ratings = await procedures.readByMovie(movieid);
    
    res.body = ratings;
    
    next();
}



export default {
  create,
  destroy,
  update,
  readByUser,
  readByMovie
}