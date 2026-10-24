import { Router } from 'express';
import { LoanController } from '../Controllers/loan.controller';
import { validateLoanPayload } from '../middlewares/validateLoan.middleware';

const router = Router();

router.get('/search', LoanController.getLoansByFilter);
router.put('/:id/accept', LoanController.acceptLoanInventory);
router.get('/:id', LoanController.getLoanById);
router.post('/', validateLoanPayload, LoanController.createLoan)

export default router;