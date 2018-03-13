import * as lodash from 'lodash';

function readByRecipient(id: number): Array<any> {
    return [
        lodash.toNumber(id)
    ];
}

export default {
    readByRecipient 
};