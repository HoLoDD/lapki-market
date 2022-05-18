import Router, { Application, Request, Response } from 'express';
import userController from '../controllers/user-controller';
const router: Application = Router();

router.post('/reg', userController.register);
router.post('/auth', userController.login);
router.get('/', userController.check);
router.put('/', userController.editUser);
router.delete('/', userController.deleteUser);

export default router;
