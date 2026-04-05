import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ReportCategoryListPublicDto } from '../../dtos/public/reportCategory.list.public.dto';
import { ReportCategoryEntity } from '../../entities/reportCategories.entity';

@Injectable()
export class ReportCategoriesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<ReportCategoryListPublicDto[]> {
    const list = await ReportCategoryEntity.find({ order: { order: 'ASC' } });
    return plainToInstance(ReportCategoryListPublicDto, list, this.opts);
  }
}