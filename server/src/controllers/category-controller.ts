import { Request, Response } from 'express';

class CategoryController {
    async getAllCategories(req: Request, res: Response) {}

    async getCategoryById(req: Request, res: Response) {}

    async addCategory(req: Request, res: Response) {}

    async editCategory(req: Request, res: Response) {}

    async deleteCategory(req: Request, res: Response) {}
}

export default new CategoryController();
