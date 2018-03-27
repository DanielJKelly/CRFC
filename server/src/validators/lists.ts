
function readByUser(model: any): Array<any> {
    return [
        model.userid
    ];
}

function create(model: any): Array<any> {
    return [
        model.userid,
        model.name
    ];
}

export default {
    readByUser,
    create
};