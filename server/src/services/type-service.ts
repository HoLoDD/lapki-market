import ApiError from '../exceptions/api-error';
import { Category } from '../models/category.entity';
import { Type } from '../models/type.entity';
import dataSource from '../utils/connect-db';

class TypeService {
    async getAllTypes() {
        const types = await dataSource.manager.find(Type, {
            relations: ['category'],
        });
        return types;
    }

    async getTypeById(id: number) {
        const type = await dataSource.manager.findOneBy(Type, { id });
        if (!type) throw ApiError.BadRequest('Type not found');
        return type;
    }

    async addType(name: string, categoryId: number) {
        const type = new Type();
        type.name = name;

        const category = await dataSource.manager.findOneBy(Category, {
            id: categoryId,
        });
        if (!category) {
            throw ApiError.BadRequest('Category not found');
        }
        type.category = category;

        const savedType = await dataSource.manager.save(Type, type);
        return savedType;
    }

    async editType() {}

    async deleteType() {}
}

export default new TypeService();
