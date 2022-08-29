import express from "express";
import {ChansonController} from "../controller/chanson.controller";

const controller = new ChansonController()
const router = express.Router()

router.get('', controller.getAllChansons)
router.get('/:id', controller.getChanson)
router.get('/album/:id', controller.getChansonsByAlbumId)
router.post('/create', controller.addChanson)
router.delete('/delete/:id', controller.deleteChanson)

export default router