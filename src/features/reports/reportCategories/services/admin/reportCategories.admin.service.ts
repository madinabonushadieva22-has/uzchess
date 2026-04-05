import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReportCategoryListAdminDto } from '../../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryEntity } from '../../entities/reportCategories.entity';
import { ReportCategoryCreateAdminDto } from '../../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../../dtos/admin/reportCategory.update.admin.dto';


@Injectable()
export class ReportCategoriesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<ReportCategoryListAdminDto[]> {
    const list = await ReportCategoryEntity.find({ order: { order: 'ASC' } });
    return plainToInstance(ReportCategoryListAdminDto, list, this.opts);
  }

  async create(payload: ReportCategoryCreateAdminDto): Promise<ReportCategoryListAdminDto> {
    const category = ReportCategoryEntity.create(payload as ReportCategoryEntity);
    await ReportCategoryEntity.save(category);
    return plainToInstance(ReportCategoryListAdminDto, category, this.opts);
  }

  async update(id: number, payload: ReportCategoryUpdateAdminDto): Promise<ReportCategoryListAdminDto> {
    const category = await ReportCategoryEntity.findOneBy({ id });
    if (!category) throw new NotFoundException('Report category with given id not found');
    Object.assign(category, Object.fromEntries(Object.entries(payload).filter(([_k, v]) => v !== undefined)));
    await ReportCategoryEntity.save(category);
    return plainToInstance(ReportCategoryListAdminDto, category, this.opts);
  }

  async delete(id: number): Promise<void> {
    const category = await ReportCategoryEntity.findOneBy({ id });
    if (!category) throw new NotFoundException('Report category with given id not found');
    await ReportCategoryEntity.remove(category);
  }
}