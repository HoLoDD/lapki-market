import Router, { Application } from 'express';
const router: Application = Router();

router.post('/reg');
router.post('/auth');
router.get('/');
router.put('/');
router.delete('/');

export default router;
