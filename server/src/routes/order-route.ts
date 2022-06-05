import Router, { Application } from 'express';
import orderController from '../controllers/order-controller';
import authMiddleware from '../middleware/auth-middleware';
const router: Application = Router();

router.post('/', authMiddleware, orderController.addOrder);
// router.get('/', orderController.getAllOrders);
// router.get('/:id', orderController.getOrderById);
// router.put('/', orderController.editOrder);
// router.delete('/', orderController.deleteOrder);

export default router;
