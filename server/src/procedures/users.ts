import Model from './model';
import userValidators from '../validators/users';
import { pluralize } from '../utils';

class Users extends Model {
    protected COLUMNS = {
        FIRSTNAME: 'firstname',
        LASTNAME: 'lastname',
        EMAIL: 'email',
        USERNAME: 'username'
    };

    validators = userValidators;
    
    constructor() {
        super('user');
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}${this.SQL_CONDITIONS.BY}Email`, [email]);
    }

    readByMovie(args: any) {
        return this.rows(`${this.SQL_GET}${pluralize(this.model)}${this.SQL_CONDITIONS.BY}Movie`, this.validators.readByMovie(args));
    }
}

export default new Users();