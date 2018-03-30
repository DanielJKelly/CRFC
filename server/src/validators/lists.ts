
function readByUser(model: any): [number] {
    return [
        model.id
    ];
}

function create(model: any): [number, string, boolean] {
    return [
        model.userid,
        model.name,
        model.isOrdered
    ];
}

function createListItem(model: any): [number, number, number] {
    return [
        model.id,
        model.movieid,
        model.ranking
    ];
}

function readById(model:any): [number] {
    return [
        model.id
    ];
}

function destroy(model:any): [number] {
    return [
        model.listid
    ];
}

function destroyFromList(model:any): Array<any> {
    return [
        model.movieid,
        model.id,
        model.ranking
    ];
}

function update(model:any): [number, string] {
    return [
        model.id, 
        model.name
    ];
}

export default {
    readByUser,
    create,
    createListItem,
    readById,
    destroy,
    destroyFromList,
    update
};