import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookCategoryListPublicDto } from '../../dtos/public/bookCategory.list.public.dto';
import { BookCategoryEntity } from '../../entities/bookCategories.entity';


@Injectable()
export class BookCategoriesPublicService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<BookCategoryListPublicDto[]> {
    const list = await BookCategoryEntity.find({ order: { title: 'ASC' } });
    return plainToInstance(BookCategoryListPublicDto, list, this.opts);
  }
}