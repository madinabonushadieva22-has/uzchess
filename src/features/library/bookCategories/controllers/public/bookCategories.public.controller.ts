import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookCategoriesPublicService } from '../../services/public/bookCategories.public.service';
import { BookCategoryListPublicDto } from '../../dtos/public/bookCategory.list.public.dto';


@ApiTags('Public / Book Categories')
@Controller('public/book-categories')
export class BookCategoriesPublicController {
  constructor(private readonly service: BookCategoriesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => BookCategoryListPublicDto, isArray: true })
  getAll(): Promise<BookCategoryListPublicDto[]> {
    return this.service.getAll();
  }
}
