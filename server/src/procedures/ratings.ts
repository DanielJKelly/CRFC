import Model from './model';
import ratingValidators from '../validators/ratings';
import { pluralize } from '../utils'; 

class Ratings extends Model {
    protected COLUMNS = {
        USERID: 'userid',
        MOVIEID: 'movieid', 
        RATING: 'rating'
    };

    validators = ratingValidators;

    constructor() {
        super('rating');
    }

    readByUser(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}User`, this.validators.readByUser(args));
    }

    readByMovie(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Movie`, this.validators.readByMovie(args));
    }
}

export default new Ratings();