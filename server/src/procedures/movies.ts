import Model from './model';
import repo from '../api/repositories/movies.repo';
import { pluralize } from '../utils';
import validators from '../validators/movies';

class Movies extends Model {
    constructor() {
        super('movie', validators);
    }

    readFromApi(id: number) {
        return repo.read(id);
    }

    readByDirector(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Director`, validators.readByDirector(args));
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, validators.readByUser(args));
    }
}

export default new Movies();