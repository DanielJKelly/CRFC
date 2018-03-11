import crud from './base.svc';

const base = crud('search');

const search = (term: string): Promise<any> => {
    return base.get('movie', {
        query: term
    });
};

export default {
    search
};