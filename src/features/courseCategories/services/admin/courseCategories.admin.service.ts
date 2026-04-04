import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseCategoryListAdminDto } from '../../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryEntity } from '../../entities/courseCategories.entity';
import { CourseCategoryCreateAdminDto } from '../../dtos/admin/courseCategory.create.admin.dto';
import { CourseCategoryUpdateAdminDto } from '../../dtos/admin/courseCategory.update.admin.dto';


@Injectable()
export class CourseCategoriesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CourseCategoryListAdminDto[]> {
    const list = await CourseCategoryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(CourseCategoryListAdminDto, list, this.opts);
  }

  async getOne(id: number): Promise<CourseCategoryListAdminDto> {
    const category = await CourseCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Course category with given id not found');
    return plainToInstance(CourseCategoryListAdminDto, category, this.opts);
  }

  async create(
    payload: CourseCategoryCreateAdminDto,
  ): Promise<CourseCategoryListAdminDto> {
    const category = CourseCategoryEntity.create(
      payload as CourseCategoryEntity,
    );
    await CourseCategoryEntity.save(category);
    return plainToInstance(CourseCategoryListAdminDto, category, this.opts);
  }

  async update(
    id: number,
    payload: CourseCategoryUpdateAdminDto,
  ): Promise<CourseCategoryListAdminDto> {
    const category = await CourseCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Course category with given id not found');
    Object.assign(
      category,
      Object.fromEntries(
        Object.entries(payload).filter(([_k, v]) => v !== undefined),
      ),
    );
    await CourseCategoryEntity.save(category);
    return plainToInstance(CourseCategoryListAdminDto, category, this.opts);
  }

  async delete(id: number): Promise<void> {
    const category = await CourseCategoryEntity.findOneBy({ id });
    if (!category)
      throw new NotFoundException('Course category with given id not found');
    await CourseCategoryEntity.remove(category);
  }
}
