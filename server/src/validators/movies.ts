function create(model: any): [number, string, string, string] {
    return [
        model.mdbid,
        model.title,
        model.director,
        model.poster
    ];
}

function all(): Array<any> {
    return [];
}

function readByDirector(model: any): [string] {
    return [
        model.director
    ];
}

function destroy(model: any): [number] {
    return [
        model.movieid
    ];
}

function readByUser(model: any): [number] {
    return [
        model.id
    ];
}

export default {
    create,
    all,
    readByDirector,
    destroy,
    readByUser
};