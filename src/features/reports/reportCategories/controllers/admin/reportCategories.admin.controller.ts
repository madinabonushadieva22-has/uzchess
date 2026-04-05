import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from 'src/core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { ReportCategoriesAdminService } from '../../services/admin/reportCategories.admin.service';
import { ReportCategoryListAdminDto } from '../../dtos/admin/reportCategory.list.admin.dto';
import { ReportCategoryCreateAdminDto } from '../../dtos/admin/reportCategory.create.admin.dto';
import { ReportCategoryUpdateAdminDto } from '../../dtos/admin/reportCategory.update.admin.dto';


@ApiTags('Admin / Report Categories')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/report-categories')
export class ReportCategoriesAdminController {
  constructor(private readonly service: ReportCategoriesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => ReportCategoryListAdminDto, isArray: true })
  getAll(): Promise<ReportCategoryListAdminDto[]> {
    return this.service.getAll();
  }

  @Post()
  @ApiOkResponse({ type: () => ReportCategoryListAdminDto })
  create(
    @Body() payload: ReportCategoryCreateAdminDto,
  ): Promise<ReportCategoryListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => ReportCategoryListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: ReportCategoryUpdateAdminDto,
  ): Promise<ReportCategoryListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
