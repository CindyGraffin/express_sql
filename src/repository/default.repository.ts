export class DefaultRepository {

    tableau: number[] = [0,1,2,3,4,5]

    getTableau = () => {
        return this.tableau
    }

    addItem = (item: number) => {
        this.tableau.push(item)
    }

    removeitem = (index: number) => {
        this.tableau.splice(index, 1)
    }
}