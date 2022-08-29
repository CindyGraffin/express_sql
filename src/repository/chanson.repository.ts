import { DeleteResult, Repository } from 'typeorm';
import { myDataSource } from '../config/datasource';
import {data} from '../data';
import {Chanson} from "../entities/Chanson";
class ChansonRepository extends Repository<Chanson>{

    data : Chanson[] = data;

    getAllChansons = () : Promise<Chanson[]> => {
        return myDataSource.getRepository(Chanson).find();
    }

    getChansonById = (id: number) : Promise<Chanson | null> => {
        return myDataSource.getRepository(Chanson).findOneBy({id: id})
    }
    getChansonByTitle = (title: string) => {
        return myDataSource.getRepository(Chanson).query(`SELECT * FROM chanson WHERE title = '${title}'`)
        // return myDataSource.getRepository(Chanson).createQueryBuilder('chanson').where('chanson.title = :title', {title: title}).getOne()
    }
    updateChanson = async(newChanson: Chanson, id: number) => {
        const chanson = await myDataSource.getRepository(Chanson).findOneByOrFail({id: id})
        myDataSource.getRepository(Chanson).merge(chanson, newChanson)
        const result = await myDataSource.getRepository(Chanson).save(chanson);
        return result;
    }


    postChanson = (chanson: Chanson): Promise<Chanson> => {
        return myDataSource.getRepository(Chanson).save(chanson)
    }

    deleteChanson = (id: number): Promise<DeleteResult> => {
        return myDataSource.getRepository(Chanson).delete(id)
    }
} 

// deux argts : classe sur laquelle il travaille et la data source manager
export const chansonRepository = Object.freeze(new ChansonRepository(Chanson, myDataSource.manager))   