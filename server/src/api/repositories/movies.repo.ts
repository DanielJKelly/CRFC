import svc from '../services/movies.svc';
import { prune } from '../factories/base';

const read = (id: number): Promise<any> => {
    return svc.read(id)
        .then((results) => {
            return prune(results);
        });
};

export default {
    read
};