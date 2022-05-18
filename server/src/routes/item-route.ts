import Router, { Application } from 'express';
import itemController from '../controllers/item-controller';
const router: Application = Router();

router.post('/', itemController.addItem);
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.put('/', itemController.editItem);
router.delete('/', itemController.deleteItem);

export default router;
