import { NextFunction, Request, Response } from 'express';
import categoryService from '../services/category-service';

class CategoryController {
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await categoryService.getAllCategories();
            res.json(categories);
        } catch (error) {
            next(error);
        }
    }

    async getCategoryById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const category = await categoryService.getCategoryById(
                parseInt(id)
            );
            res.json(category);
        } catch (error) {
            next(error);
        }
    }

    async addCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, typeIds } = req.body;
            const category = await categoryService.addCategory(name, typeIds);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }

    async editCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ TODO: 'EDIT CATEGORY' });
        } catch (error) {
            next(error);
        }
    }

    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({ TODO: 'DELETE CATEGORY' });
        } catch (error) {
            next(error);
        }
    }
}

export default new CategoryController();
