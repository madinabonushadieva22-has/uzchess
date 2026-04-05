import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategoryListAdminDto } from '../../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryEntity } from '../../entities/bookCategories.entity';
import { BookCategoryCreateAdminDto } from '../../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/admin/bookCategory.update.admin.dto';

@Injectable()
export class BookCategoriesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<BookCategoryListAdminDto[]> {
    const list = await BookCategoryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(BookCategoryListAdminDto, list, this.opts);
  }

  async getOne(id: number): Promise<BookCategoryListAdminDto> {
    const category = await BookCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Book category with given id not found');
    return plainToInstance(BookCategoryListAdminDto, category, this.opts);
  }

  async create(
    payload: BookCategoryCreateAdminDto,
  ): Promise<BookCategoryListAdminDto> {
    const category = BookCategoryEntity.create(payload as BookCategoryEntity);
    await BookCategoryEntity.save(category);
    return plainToInstance(BookCategoryListAdminDto, category, this.opts);
  }

  async update(
    id: number,
    payload: BookCategoryUpdateAdminDto,
  ): Promise<BookCategoryListAdminDto> {
    const category = await BookCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Book category with given id not found');
    Object.assign(
      category,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await BookCategoryEntity.save(category);
    return plainToInstance(BookCategoryListAdminDto, category, this.opts);
  }

  async delete(id: number): Promise<void> {
    const category = await BookCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Book category with given id not found');
    await BookCategoryEntity.remove(category);
  }
}
