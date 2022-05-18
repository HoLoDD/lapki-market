import { Request, Response } from 'express';

class TypeController {
    async getAllTypes(req: Request, res: Response) {}

    async getTypeById(req: Request, res: Response) {}

    async addType(req: Request, res: Response) {}

    async editType(req: Request, res: Response) {}

    async deleteType(req: Request, res: Response) {}
}

export default new TypeController();
