import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';

const router = Router();

router.get('/search', UserController.getUsersByFilter);
router.post('/', UserController.createUser);
router.put('/:id/accept', UserController.acceptUserInventory);
router.get('/:id', UserController.getUserById);
router.patch('/:id/status',UserController.changeUserStatus)

export default router;