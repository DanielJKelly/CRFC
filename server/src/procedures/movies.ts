import Model from './model';
import repo from '../api/repositories/movies.repo';

class Movies extends Model {
    constructor() {
        super('Movie');
    }

    readFromApi(id: number) {
        return repo.read(id);
    }
}

export default new Movies();