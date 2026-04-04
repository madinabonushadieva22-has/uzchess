import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CoursesAdminService } from '../service/courses.admin.service';
import { CourseCreateAdminDto } from '../dtos/admin/course.create.admin.dto';
import { CourseUpdateAdminDto } from '../dtos/admin/course.update.admin.dto';
import { CourseListAdminDto } from '../dtos/admin/course.list.admin.dto';
import { CourseDetailAdminDto } from '../dtos/admin/course.detail.admin.dto';
import { AuthenticationGuard } from '../../../../core/guards/authentication.guard';
import { Roles } from '../../../../core/decorators/roles.decorator';
import { UserRole } from '../../../../core/enums';

@ApiTags('Admin / Courses')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/courses')
export class CoursesAdminController {
  constructor(private readonly service: CoursesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseListAdminDto, isArray: true })
  getAll(): Promise<CourseListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  getOne(@Param('id') id: number): Promise<CourseDetailAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  create(@Body() payload: CourseCreateAdminDto): Promise<CourseDetailAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => CourseDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CourseUpdateAdminDto,
  ): Promise<CourseDetailAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}