function readByRecipient(model: any): [number] {
    return [
        model.id
    ];
}

function readByRecommender(model: any): [number] {
    return [
        model.id
    ];
}

function update(model: any): [number] {
    return [
        model.id
    ];
}

function create(model: any): [number, number, number] {
    return [
        model.recommenderid,
        model.recipientid, 
        model.movieid
    ];
}

export default {
    readByRecipient,
    readByRecommender,
    update,
    create
};