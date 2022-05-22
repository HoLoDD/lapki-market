import { NextFunction, Request, Response } from 'express';
import typeService from '../services/type-service';

class TypeController {
    async getAllTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const types = await typeService.getAllTypes();
            res.json(types);
        } catch (error) {
            next(error);
        }
    }

    async getTypeById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const type = await typeService.getTypeById(parseInt(id));
            res.json(type);
        } catch (error) {
            next(error);
        }
    }

    async addType(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, categoryId } = req.body;
            const type = await typeService.addType(name, categoryId);
            res.json(type);
        } catch (error) {
            next(error);
        }
    }

    async editType(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ TODO: 'EDIT TYPE' });
        } catch (error) {
            next(error);
        }
    }

    async deleteType(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ TODO: 'DELETE TYPE' });
        } catch (error) {
            next(error);
        }
    }
}

export default new TypeController();
