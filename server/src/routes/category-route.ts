import Router, { Application } from 'express';
import categoryController from '../controllers/category-controller';
const router: Application = Router();

router.post('/', categoryController.addCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/', categoryController.editCategory);
router.delete('/', categoryController.deleteCategory);

export default router;
