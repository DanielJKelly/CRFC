import Model from './model';
import MovieRepository from '../api/repositories/movies.repo';

class Movies extends Model {
    repo: MovieRepository;

    constructor() {
        super('User');

        this.repo = new MovieRepository();
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}ByEmail`, [email]);
    }

    readFromApi(id: number) {
        return this.repo.read(id);
    }
}

export default new Movies();