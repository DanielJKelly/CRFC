import Model from './model';
import repo from '../api/repositories/movies.repo';
import { pluralize } from '../utils';
import validators from '../factories/movies';

class Movies extends Model {
    constructor() {
        super('movie', validators);
    }

    readFromApi(id: number) {
        return repo.read(id);
    }
}

export default new Movies();