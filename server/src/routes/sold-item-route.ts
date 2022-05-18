import Router, { Application } from 'express';
import soldItemController from '../controllers/sold-item-controller';
const router: Application = Router();

router.post('/', soldItemController.getSoldItemById);
router.get('/:id', soldItemController.getSoldItemById);
router.delete('/', soldItemController.deleteSoldItem);

export default router;
