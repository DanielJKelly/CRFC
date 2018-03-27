
function readByUser(model: any): Array<any> {
    return [
        model.userid
    ];
}

function create(model: any): Array<any> {
    return [
        model.userid,
        model.name,
        model.isOrdered
    ];
}

export default {
    readByUser,
    create
};