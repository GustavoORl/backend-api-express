import express from "express";
import { getPublicationController } from "../controllers/publication/getPublicationController.js";
import { patchPublicationController } from "../controllers/publication/patchPublicationController.js";
import { createPublicationController } from "../controllers/publication/createPublicationController.js";
import { deletePublicationController } from "../controllers/publication/deletePublicationController.js";
import { updatePublicationController } from "../controllers/publication/updatePublicationController.js";

const router = express.Router();

router.get('/', getPublicationController);
router.post('/', createPublicationController);
router.put('/:id', updatePublicationController);
router.patch('/:id', patchPublicationController);
router.delete('/:id', deletePublicationController);

export default router;