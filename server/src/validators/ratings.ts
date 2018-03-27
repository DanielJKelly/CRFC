function create(model: any): Array<any> {
        return [
            model.userid,
            model.movieid,
            model.rating
        ];
    }

function destroy(model: any): Array<any> {
        return [
            model.id
        ];
    }

    export default {
        create,
        destroy
    }
