export default abstract class BaseRepository {
    abstract read(id: number): Promise<any>;
}