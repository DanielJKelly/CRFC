import Model from './model';
import validators from '../factories/recommendations';

class Recommendations extends Model {
    constructor() {
        super('recommendation', validators);
    }
}

export default new Recommendations();