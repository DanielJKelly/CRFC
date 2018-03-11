import svc from '../services/search.svc';
import { prune } from '../factories/base';

const search = (term: string): Promise<any> => {
    return svc.search(term)
        .then((results) => {
            return prune(results);
        });
};

export default {
    search
};