import * as lodash from 'lodash';

function readByRecipient(id: number): Array<any> {
    return [
        lodash.toNumber(id)
    ];
}

function readByRecommender(id: number): Array<any> {
    return [
        lodash.toNumber(id)
    ];
}

function update(id: number): Array<any> {
    return [
        lodash.toNumber(id)
    ];
}

function create(model: any): Array<any> {
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