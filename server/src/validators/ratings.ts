function create(model: any): Array<any> {
        return [
            model.userid,
            model.movieid,
            model.rating
        ];
    }

function destroy(model: any): Array<any> {
        return [
            model.userid,
            model.movieid
        ];
    }
function update(model: any): Array<any> {
    return [
        model.userid,
        model.movieid,
        model.rating
    ];
}

    export default {
        create,
        destroy,
        update
    }
