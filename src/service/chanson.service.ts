import {chansonRepository} from "../repository/chanson.repository";
import {Chanson} from "../entities/Chanson";

export class ChansonService {

    private repo = chansonRepository

    getAllChansons = (): Promise<Chanson[]> => {
        return this.repo.getAllChansons()
    }

    getChanson = async (id: number) => {
        return this.repo.getChansonById(id)
    }
    getChansonByTitle = async (title: string) => {
        return this.repo.getChansonByTitle(title)
    }

    postChanson = (chanson: Chanson) => {
        return this.repo.postChanson(chanson);
    }

    deleteChanson = (id: number) => {
        return this.repo.deleteChanson(id)
    }

    updateChanson = (chanson: Chanson, id: number) => {
        return this.repo.updateChanson(chanson, id)
    }
}

export const chansonService = Object.freeze(new ChansonService())