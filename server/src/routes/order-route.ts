import Router, { Application } from 'express';
import orderController from '../controllers/order-controller';
const router: Application = Router();

router.post('/', orderController.addOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.put('/', orderController.editOrder);
router.delete('/', orderController.deleteOrder);

export default router;
