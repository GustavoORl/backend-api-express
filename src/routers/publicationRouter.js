import express from "express";
import { getPublicationController } from "../controllers/publication/getPublicationController.js";
import { patchPublicationController } from "../controllers/publication/patchPublicationController.js";
import { createPublicationController } from "../controllers/publication/createPublicationController.js";
import { deletePublicationController } from "../controllers/publication/deletePublicationController.js";
import { updatePublicationController } from "../controllers/publication/updatePublicationController.js";

const router = express.Router();

router.get('/', getPublicationController);
router.post('/', createPublicationController);
router.put('/', updatePublicationController);
router.patch('/', patchPublicationController);
router.delete('/', deletePublicationController);

export default router;