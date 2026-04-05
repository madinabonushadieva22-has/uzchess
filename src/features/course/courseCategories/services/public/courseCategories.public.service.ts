import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CourseCategoryListPublicDto } from '../../dtos/public/courseCategory.list.public.dto';
import { CourseCategoryEntity } from '../../entities/courseCategories.entity';

@Injectable()
export class CourseCategoriesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<CourseCategoryListPublicDto[]> {
    const list = await CourseCategoryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(CourseCategoryListPublicDto, list, this.opts);
  }
}
