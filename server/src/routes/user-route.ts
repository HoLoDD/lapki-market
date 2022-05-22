import Router, { Application, Request, Response } from 'express';
import userController from '../controllers/user-controller';
import authMiddleware from '../middleware/auth-middleware';
const router: Application = Router();

router.post('/reg', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/', authMiddleware, userController.check);
router.put('/', authMiddleware, userController.editUser);

export default router;
