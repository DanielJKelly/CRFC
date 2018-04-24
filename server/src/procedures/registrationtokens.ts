import Model from './model';
import registrationtokenValidators from '../validators/registrationtokens';

class RegistrationTokens extends Model {
    protected COLUMNS = {
        ID: 'id',
        PERMISSIONS:'permissions'
    };

    validators = registrationtokenValidators;
    
    constructor() {
        super('registrationToken');
    }
}

export default new RegistrationTokens();