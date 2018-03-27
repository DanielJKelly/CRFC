import Model from './model';
import validators from '../validators/ratings';
import { pluralize } from '../utils'; 

class Ratings extends Model {
    constructor() {
        super('rating', validators);
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, validators.readByUser(args));
    }

    readByMovie(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Movie`, validators.readByMovie(args));
    }
}

export default new Ratings();