import { Request, Response } from "express";
import { paroleService } from "../service/parole.service";


class ParoleController {

    private service = paroleService;

    public create = (req: Request, res: Response) => {
        this.service.create(req.body).then(data => res.json(data))
    }

    public getAllParoles = (req : Request, res : Response) => {
        this.service.getAllParoles().then((data) => res.json(data))
    }

    public deleteParole = (req: Request, res: Response) => {
        try {
            this.service.deleteParole(Number(req.params.id))
            res.sendStatus(204)
        } catch (e) {
            res.sendStatus(400)
        }
    }
    public updateParole = (req: Request, res: Response) => {
        this.service.updateParole(+req.params.id, req.query)
        .then(data => res.status(200).json(data))
    }


}

export const paroleController = Object.freeze(new ParoleController);