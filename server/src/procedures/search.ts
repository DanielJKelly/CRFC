import repo from '../api/repositories/search.repo';

class Search {
    search(term: string) {
        return repo.search(term);
    }
}

export default new Search();

