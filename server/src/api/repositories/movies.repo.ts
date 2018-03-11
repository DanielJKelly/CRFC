import svc from '../services/movies.svc';

const read = (id: number): Promise<any> => {
    return svc.read(id)
        .then((results) => {
            return results.data;
        });
};

export default {
    read
};