import Router, { Application } from 'express';
import typeController from '../controllers/type-controller';
const router: Application = Router();

router.post('/', typeController.addType);
router.get('/', typeController.getAllTypes);
router.get('/:id', typeController.getTypeByCategory);
router.put('/', typeController.editType);
router.delete('/', typeController.deleteType);

export default router;
