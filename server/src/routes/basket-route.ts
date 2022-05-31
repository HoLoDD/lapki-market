import Router, { Application } from 'express';
import basketController from '../controllers/basket-controller';
import authMiddleware from '../middleware/auth-middleware';
const router: Application = Router();

router.get('/:id', authMiddleware, basketController.getBasketById);
router.post('/', authMiddleware, basketController.addItemToBasket);
router.delete('/', authMiddleware, basketController.removeItemFromBasket);

export default router;
