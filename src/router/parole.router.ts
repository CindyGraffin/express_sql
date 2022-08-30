import express from "express";
import {ChansonController} from "../controller/chanson.controller";
import { paroleController } from "../controller/parole.controller";


const controller = paroleController
const router = express.Router()

router.patch('/:id/update', controller.updateParole)
router.post('', controller.create)
router.delete('/:id', controller.deleteParole)
router.get('', controller.getAllParoles)


export default router