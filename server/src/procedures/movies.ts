import Model from './model';
import repo from '../api/repositories/movies.repo';

class Movies extends Model {
    constructor() {
        super('Movie');
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}ByEmail`, [email]);
    }

    readFromApi(id: number) {
        return repo.read(id);
    }
}

export default new Movies();