import Router, { Application } from 'express';
import orderHistoryController from '../controllers/order-history-controller';
const router: Application = Router();

router.post('/', orderHistoryController.addOrderHistory);
router.get('/:id', orderHistoryController.getOrderHistoryById);
router.delete('/', orderHistoryController.deleteOrder);

export default router;
