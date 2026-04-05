import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { CourseLessonsPublicService } from '../../services/public/courseLesson.public.service';
import { CourseLessonListPublicDto } from '../../dtos/public/courseLesson.list.public.dto';
import { CourseLessonDetailPublicDto } from '../../dtos/public/courseLesson.detail.public.dto';


@ApiTags('Public / Course Lessons')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/course-lessons')
export class CourseLessonsPublicController {
  constructor(private readonly service: CourseLessonsPublicService) {}

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseLessonListPublicDto, isArray: true })
  getAllByCourse(
    @Param('courseId') courseId: number,
  ): Promise<CourseLessonListPublicDto[]> {
    return this.service.getAllByCourse(courseId);
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CourseLessonDetailPublicDto })
  getOne(@Param('id') id: number): Promise<CourseLessonDetailPublicDto> {
    return this.service.getOne(id);
  }
}
