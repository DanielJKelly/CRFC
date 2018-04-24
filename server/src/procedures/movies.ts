import Model from './model';
import repo from '../api/repositories/movies.repo';
import { pluralize, capitalize} from '../utils';
import movieValidators from '../validators/movies';

class Movies extends Model {
    protected COLUMNS = {
        MDBID: 'mdbid',
        TITLE: 'title',
        DIRECTOR: 'director',
        POSTER: 'poster',
    };

    validators = movieValidators;

    constructor() {
        super('movie');
    }

    readFromApi(id: number) {
        return repo.read(id);
    }

    readByDirector(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}${capitalize(this.COLUMNS.DIRECTOR)}`, this.validators.readByDirector(args));
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, this.validators.readByUser(args));
    }

    readWithFilter(args: any) {

    }
}

export default new Movies();