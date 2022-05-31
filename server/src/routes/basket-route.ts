import Router, { Application } from 'express';
import basketController from '../controllers/basket-controller';
const router: Application = Router();

router.get('/:id', basketController.getBasketById);
router.post('/', basketController.addItemToBasket);
router.delete('/', basketController.removeItemFromBasket);

export default router;
