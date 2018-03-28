function create(model: any): [number, string, string, string] {
    return [
        model.mdbid,
        model.title,
        model.director,
        model.poster
    ];
}

export default {
    create
};