function create(model: any): Array<any> {
    return [
        model.firstName,
        model.lastName,
        model.email,
        model.username,
        model.password
    ];
}

function all(): Array<any> {
    return [];
} 

function readByMovie(model: any): [number] {
    return [
        model.id
    ];
}

export default {
    all,
    create,
    readByMovie
};