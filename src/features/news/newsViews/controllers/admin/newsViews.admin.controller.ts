import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { NewsViewsAdminService } from '../../services/admin/newsViews.admin.service';
import { NewsViewListAdminDto } from '../../dtos/admin/newsView.list.admin.dto';


@ApiTags('Admin / News Views')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/news-views')
export class NewsViewsAdminController {
  constructor(private readonly service: NewsViewsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => NewsViewListAdminDto, isArray: true })
  getAll(): Promise<NewsViewListAdminDto[]> {
    return this.service.getAll();
  }

  @Get('news/:newsId')
  @ApiOkResponse({ type: () => NewsViewListAdminDto, isArray: true })
  getByNews(@Param('newsId') newsId: number): Promise<NewsViewListAdminDto[]> {
    return this.service.getByNews(newsId);
  }
}