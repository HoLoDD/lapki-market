import { NextFunction, Request, Response } from 'express';
import itemService from '../services/item-service';

class ItemController {
    async getAllItems(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await itemService.getAllItems();
            res.json(items);
        } catch (error) {
            next(error);
        }
    }

    async getItemById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const item = await itemService.getItemById(parseInt(id));
            res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async addItem(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, price, description, photo, typeId } = req.body;
            const item = await itemService.addItem({
                name,
                price,
                description,
                photo,
                typeId,
            });
            res.json(item);
        } catch (error) {
            next(error);
        }
    }

    async editItem(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async deleteItem(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

export default new ItemController();
