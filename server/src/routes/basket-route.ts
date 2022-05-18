import Router, { Application } from 'express';
import basketController from '../controllers/basket-controller';
const router: Application = Router();

router.post('/', basketController.addBasket);
router.get('/:id', basketController.getBasketById);
router.put('/', basketController.editBasket);
router.delete('/', basketController.deleteBasket);

export default router;
