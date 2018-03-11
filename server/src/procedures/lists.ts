import Model from './model';
import validators from '../factories/lists';

class Lists extends Model {
    constructor() {
        super('list', validators);
    }
}


export default new Lists();