import { Request, Response } from 'express';

class SoldItemController {
    async getSoldItemById(req: Request, res: Response) {}

    async addSoldItem(req: Request, res: Response) {}

    async deleteSoldItem(req: Request, res: Response) {}
}

export default new SoldItemController();
