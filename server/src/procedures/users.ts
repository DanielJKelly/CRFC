import Model from './model';

class Users extends Model {
    constructor() {
        super('user');
    }

    readByEmail(email: string) {
        return this.row(`${this.SQL_GET}${this.model}ByEmail`, [email]);
    }
}

export default new Users();