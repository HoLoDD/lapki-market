import Router, { Application } from 'express';
import userRouter from './user-route';
import basketRouter from './basket-route';
import categoryRouter from './category-route';
import typeRouter from './type-route';
import itemRouter from './item-route';
import orderHistoryRouter from './order-history-route';
import orderRouter from './order-route';
import soldItemRouter from './sold-item-route';

const router: Application = Router();

router.use('/user', userRouter);
router.use('/basket', basketRouter);
router.use('/category', categoryRouter);
router.use('/type', typeRouter);
router.use('/item', itemRouter);
router.use('/order-history', orderHistoryRouter);
router.use('/order', orderRouter);
router.use('/sold-item', soldItemRouter);

export default router;
