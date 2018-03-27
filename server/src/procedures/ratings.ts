import Model from './model';
import validators from '../validators/ratings';
import { pluralize } from '../utils'; 

class Ratings extends Model {
    constructor() {
        super('rating', validators);
    }
}

export default new Ratings();