import Model from './model';
import passwordValidators from '../validators/passwords';

class Passwords extends Model {
    protected COLUMNS = {
        ID: 'id',
        USERID: 'userid',
        HASH: 'hash'
    };

    validators = passwordValidators;
    
    constructor() {
        super('password');
    }
}

export default new Passwords();