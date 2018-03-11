import Model from './model';
import repo from '../api/repositories/movies.repo';
import { pluralize } from '../utils';

class Movies extends Model {
    constructor() {
        super('movie');
    }

    readFromApi(id: number) {
        return repo.read(id);
    }

    readFromList(listId: number) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}ByList`, [listId]);
    }
}

export default new Movies();