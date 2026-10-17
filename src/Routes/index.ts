import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRouters from './user.routes';



const router = Router();
router.use('/loans', loanRoutes);
router.use('/users', userRouters);


export default router;