import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from 'src/core/decorators/roles.decorator';
import { CourseLessonsAdminService } from '../../services/admin/courseLesson.admin.service';
import { CourseLessonListAdminDto } from '../../dtos/admin/courseLesson.list.admin.dto';
import { CourseLessonDetailAdminDto } from '../../dtos/admin/courseLesson.detail.admin.dto';
import { CourseLessonCreateAdminDto } from '../../dtos/admin/courseLesson.create.admin.dto';
import { CourseLessonUpdateAdminDto } from '../../dtos/admin/courseLesson.update.admin.dto';


@ApiTags('Admin / Course Lessons')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-lessons')
export class CourseLessonsAdminController {
  constructor(private readonly service: CourseLessonsAdminService) {}

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseLessonListAdminDto, isArray: true })
  getAllByCourse(@Param('courseId') courseId: number): Promise<CourseLessonListAdminDto[]> {
    return this.service.getAllByCourse(courseId);
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  getOne(@Param('id') id: number): Promise<CourseLessonDetailAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  create(@Body() payload: CourseLessonCreateAdminDto): Promise<CourseLessonDetailAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => CourseLessonDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CourseLessonUpdateAdminDto,
  ): Promise<CourseLessonDetailAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}