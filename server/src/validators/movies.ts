function create(model: any): Array<any> {
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