import svc from '../services/search.svc';

const search = (term: string): Promise<any> => {
    return svc.search(term)
        .then((results) => {
            return results.data;
        });
};

export default {
    search
};