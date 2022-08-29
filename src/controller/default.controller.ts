import {Request, Response} from "express";
import {DefaultService} from "../service/default.service";

export class DefaultController {

    service = new DefaultService()

    getAll = (req: Request, res: Response) => {
        res.send(this.service.getTableau())
    }

    additem = (req: Request, res: Response) => {
        let value = req.body.nombre
        let resp = this.service.addItem(Number(value))
        if(resp == 'error') res.send(resp)
        res.sendStatus(201);
    }

    removeItem = (req: Request, res: Response) => {
        let value = req.params.index
        this.service.removeItem(Number(value))
        res.sendStatus(204)
    }
}