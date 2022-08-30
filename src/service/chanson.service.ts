import {chansonRepository} from "../repository/chanson.repository";
import {Chanson} from "../entities/Chanson";
import { ParsedQs } from "qs";

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

    replaceChanson = (id: number, chanson: Chanson) => {
        return this.repo.update(id, chanson)
    }

    updateChanson = (id: number, queryParams: any) => {
        const newChanson = Object.assign({}, Chanson, {...queryParams})
        console.log(queryParams)
        return this.repo.updateChanson(id, newChanson)
    }
}  

export const chansonService = Object.freeze(new ChansonService())