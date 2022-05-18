import { Request, Response } from 'express';

class ItemController {
    async getAllItems(req: Request, res: Response) {}

    async getItemById(req: Request, res: Response) {}

    async addItem(req: Request, res: Response) {}

    async editItem(req: Request, res: Response) {}

    async deleteItem(req: Request, res: Response) {}
}

export default new ItemController();
