import {DefaultRepository} from "../repository/default.repository";

export class DefaultService {

    repo = new DefaultRepository()

    getTableau = () => {
        return this.repo.getTableau()
    }

    addItem = (item: number) => {
        if(item > 10 ) return 'error'
        this.repo.addItem(item)
    }

    removeItem = (index: number) => {
        this.repo.removeitem(index)
    }
}