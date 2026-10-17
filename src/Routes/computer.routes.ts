import { Router } from 'express';
import { ComputerController } from '../Controllers/computer.controller';

const router = Router();

router.get('/search', EnviromentController.getEnviromentByFilter);
router.post('/', EnviromentController.createEnviroment);
router.put('/:id/accept', EnviromentController.getEnviromentById);
router.get('/:id', EnviromentController.acceptEnviromentInventory);
router.patch('/:id/accept',EnviromentController.changeEnviromentStatus)

export default router;