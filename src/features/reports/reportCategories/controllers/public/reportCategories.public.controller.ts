import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReportCategoriesPublicService } from '../../services/public/reportCategories.public.service';
import { ReportCategoryListPublicDto } from '../../dtos/public/reportCategory.list.public.dto';

@ApiTags('Public / Report Categories')
@Controller('public/report-categories')
export class ReportCategoriesPublicController {
  constructor(private readonly service: ReportCategoriesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => ReportCategoryListPublicDto, isArray: true })
  getAll(): Promise<ReportCategoryListPublicDto[]> { return this.service.getAll(); }
}