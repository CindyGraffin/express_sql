import express from "express";
import {ChansonController} from "../controller/chanson.controller";

const controller = new ChansonController()
const router = express.Router()

router.get('', controller.getAllChansons)
router.get('/search', controller.getChansonByTitle)
router.get('/:id', controller.getChanson)
router.post('', controller.addChanson)
router.delete('/delete/:id', controller.deleteChanson)

export default router