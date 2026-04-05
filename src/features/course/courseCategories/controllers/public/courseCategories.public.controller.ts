import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseCategoriesPublicService } from '../../services/public/courseCategories.public.service';
import { CourseCategoryListPublicDto } from '../../dtos/public/courseCategory.list.public.dto';


@ApiTags('Public / Course Categories')
@Controller('public/course-categories')
export class CourseCategoriesPublicController {
  constructor(private readonly service: CourseCategoriesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListPublicDto, isArray: true })
  getAll(): Promise<CourseCategoryListPublicDto[]> {
    return this.service.getAll();
  }
}