import Model from './model';
import validators from '../validators/lists';

class Lists extends Model {
    constructor() {
        super('list', validators);
    }
}


export default new Lists();