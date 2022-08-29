import express from "express";
import {DefaultController} from "../controller/default.controller";

const router = express.Router();
const controller = new DefaultController();

router.get('', controller.getAll)
router.post('/add', controller.additem)
router.delete('/delete/:index', controller.removeItem)
export default router