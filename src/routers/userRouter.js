import express from 'express';
import { createUserController } from '../controllers/user/createUserController.js';
import { deleteUserController } from '../controllers/user/deleteUserController.js';
import { getUsersController } from '../controllers/user/getUsersController.js';
import { updateAvatarUserController } from '../controllers/user/updateAvatarUserController.js';
import { updateUserController } from '../controllers/user/updateUserController.js';
import { authentication } from '../middlewares/authentication.js';

const router = express.Router();

router.get('/', getUsersController);
router.post('/', createUserController);
router.put('/:id', authentication, updateUserController);
router.patch('/:id', updateAvatarUserController);
router.delete('/:id', deleteUserController);

export default router;