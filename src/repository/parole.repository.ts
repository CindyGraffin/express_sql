import { DeleteResult, Repository } from 'typeorm';
import { myDataSource } from '../config/datasource';

import {Parole} from "../entities/Parole";

class ParoleRepository extends Repository<Parole>{

    postParole = (parole: Parole): Promise<Parole> => {
        return myDataSource.getRepository(Parole).save(parole)
    }

    getAllParoles = () : Promise<Parole[]> => {
        return myDataSource.getRepository(Parole).find();
    }

    deleteParole = (id: number): Promise<DeleteResult> => {
        return myDataSource.getRepository(Parole).delete(id)
    }

    updateParole = async(id: number, newParole: Parole) => {
        const parole = await myDataSource.getRepository(Parole).findOneByOrFail({id: id})
        myDataSource.getRepository(Parole).merge(parole, newParole)
        const result = await myDataSource.getRepository(Parole).save(parole);
        return result;
    }

} 

export const paroleRepository = Object.freeze(new ParoleRepository(Parole, myDataSource.manager))
  