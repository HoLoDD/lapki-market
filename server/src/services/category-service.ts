import ApiError from '../exceptions/api-error';
import { Category } from '../models/category.entity';
import dataSource from '../utils/connect-db';
import typeService from './type-service';

class CategoryService {
    async getAllCategories() {
        const categories = await dataSource.manager.find(Category);
        return categories;
    }

    async getCategoryById(id: number) {
        const category = await dataSource.manager.findOneBy(Category, { id });
        if (!category) throw ApiError.BadRequest('Category not found');
        return category;
    }

    async addCategory(name: string, typeIds: number[]) {
        const category = new Category();

        const types = await typeService.getAllTypes();
        category.name = name;
        types.forEach((type) => {
            if (typeIds.includes(type.id)) category.type.push(type);
        });

        const savedCategory = await dataSource.manager.save(Category, category);
        return savedCategory;
    }

    async editCategory() {}

    async deleteCategory() {}
}

export default new CategoryService();
