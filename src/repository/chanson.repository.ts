import {data} from '../data';
import {Chanson} from "../entities/Chanson";

export class ChansonRepository {

    data : Chanson[] = data;

    getAllChansons = () : Chanson[] => {
        return this.data
    }

    getChansonById = (id: number) : Chanson => {
        return this.data.filter(item => item.id == id)[0]
    }
    // ne fonctionne plus
    getChansonsByAlbumId = (id: number): Chanson[] => {
        return this.data.filter(item => item.id == id)
    }

    postChanson = (chanson: Chanson) => {
        return this.data.push(chanson)
    }

    deleteChanson = (id: number) => {
        this.data = this.data.filter(item => item.id != id)
    }
}