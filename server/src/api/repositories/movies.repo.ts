import BaseRepository from './base.repo';
import Base from '../../procedures/base';
import MovieService from '../services/movies.svc';

export default class MovieRepository extends Base {
    private svc: MovieService;

    constructor() {
        super();

        this.svc = new MovieService();
    }

    read(id: number): Promise<any> {
        return this.svc.read(id);
    }
}