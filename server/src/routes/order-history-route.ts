import Router, { Application } from 'express';
import orderHistoryController from '../controllers/order-history-controller';
import authMiddleware from '../middleware/auth-middleware';
const router: Application = Router();

router.get('/', authMiddleware, orderHistoryController.getOrderHistoryById);
router.delete('/', authMiddleware, orderHistoryController.deleteOrder);

export default router;
