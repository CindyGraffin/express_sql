import {ChansonService} from "../service/chanson.service";
import {Request, Response} from "express";

export class ChansonController {

    private service = new ChansonService()

    getAllChansons = (req : Request, res : Response) => {
        res.send(this.service.getAllChansons())
    }

    getChanson = (req: Request, res: Response) => {
        res.send(this.service.getChanson(Number(req.params.id)))
    }

    getChansonsByAlbumId = (req: Request, res: Response) => {
        res.send(this.service.getChansonsByAlbumId(Number(req.params.id)));
    }

    addChanson = (req: Request, res: Response) => {
        try {
            this.service.postChanson(req.body)
            res.sendStatus(201)
        } catch (e) {
            res.sendStatus(404)
        }
    }

    deleteChanson = (req: Request, res: Response) => {
        try {
        this.service.deleteChanson(Number(req.params.id))
            res.sendStatus(204)
        } catch (e) {
            res.sendStatus(404)
        }

    }
}