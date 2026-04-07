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
import { CourseCategoriesAdminService } from '../../services/admin/courseCategories.admin.service';
import { CourseCategoryListAdminDto } from '../../dtos/admin/courseCategory.list.admin.dto';
import { CourseCategoryCreateAdminDto } from '../../dtos/admin/courseCategory.create.admin.dto';
import { AuthenticationGuard } from 'src/core/guards/autentification.guard';
import { UserRole } from 'src/core/enums';
import { CourseCategoryUpdateAdminDto } from '../../dtos/admin/courseCategory.update.admin.dto';
import { Roles } from '../../../../../core/decorators/roles.decorator';

@ApiTags('Admin / Course Categories')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-categories')
export class CourseCategoriesAdminController {
  constructor(private readonly service: CourseCategoriesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto, isArray: true })
  getAll(): Promise<CourseCategoryListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto })
  getOne(@Param('id') id: number): Promise<CourseCategoryListAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto })
  create(
    @Body() payload: CourseCategoryCreateAdminDto,
  ): Promise<CourseCategoryListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => CourseCategoryListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CourseCategoryUpdateAdminDto,
  ): Promise<CourseCategoryListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}

