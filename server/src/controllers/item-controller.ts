import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import * as uuid from 'uuid';
import { Item } from '../models/item.entity';
import itemService from '../services/item-service';

class ItemController {
    async getItems(
        req: Request<{}, {}, {}, { categoryId: string; typeId: string }>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { categoryId, typeId } = req.query;

            let items: Item[];

            if (!categoryId && !typeId) {
                items = await itemService.getAllItems();
            }
            if (typeId) {
                items = await itemService.getItemsByType(parseInt(typeId));
            }
            if (!typeId && categoryId) {
                items = await itemService.getItemsByCategory(
                    parseInt(categoryId)
                );
            }

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
            const { name, price, description, typeId } = req.body;
            const photo = req.files.photo as UploadedFile;
            const fileName = uuid.v4() + '.jpg';
            photo.mv(path.resolve(__dirname, '..', '..', 'public', fileName));
            const item = await itemService.addItem({
                name,
                price,
                description,
                photo: fileName,
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
