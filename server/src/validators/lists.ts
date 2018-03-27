
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

function createListItem(model: any): Array<any> {
    return [
        model.listid,
        model.movieid,
        model.ranking
    ];
}

function readById(model:any): Array<any> {
    return [
        model.listid
    ];
}

function destroy(model:any): Array<any> {
    return [
        model.listid
    ];
}

function destroyFromList(model:any): Array<any> {
    return [
        model.movieid,
        model.listid
    ];
}

export default {
    readByUser,
    create,
    createListItem,
    readById,
    destroy,
    destroyFromList
};