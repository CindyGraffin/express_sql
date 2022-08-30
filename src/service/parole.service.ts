import { myDataSource } from "../config/datasource";
import { Parole } from "../entities/Parole";
import { paroleRepository } from "../repository/parole.repository";

class ParoleService {
    private repo = paroleRepository

    public create = (parole: Parole): Promise<Parole> => {
        return myDataSource.getRepository(Parole).save(parole)
    }
    public getAllParoles = (): Promise<Parole[]> => {
        return this.repo.getAllParoles()
    }
    public deleteParole = (id: number) => {
        return this.repo.deleteParole(id)
    }
    
    updateParole = (id: number, queryParams: any) => {
        const newParole = Object.assign({}, Parole, {...queryParams})
        console.log(queryParams)
        return this.repo.updateParole(id, newParole)
    }
}

export const paroleService = Object.freeze(new ParoleService()); 