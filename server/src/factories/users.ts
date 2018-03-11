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

export default {
    all,
    create
};