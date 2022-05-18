import { Request, Response } from 'express';

class UserController {
    async getAllUser(req: Request, res: Response) {
        res.json({ message: 'ALL USER GET' });
    }

    async register(req: Request, res: Response) {}

    async login(req: Request, res: Response) {}

    async check(req: Request, res: Response) {
        res.json({ user: 'get all users' });
    }

    async editUser(req: Request, res: Response) {}

    async deleteUser(req: Request, res: Response) {}
}

export default new UserController();
