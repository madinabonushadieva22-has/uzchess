import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseSectionsPublicService } from '../../services/public/courseSections.public.service';
import { CourseSectionListPublicDto } from '../../dtos/public/courseSection.list.public.dto';


@ApiTags('Public / Course Sections')
@Controller('public/course-sections')
export class CourseSectionsPublicController {
  constructor(private readonly service: CourseSectionsPublicService) {}

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseSectionListPublicDto, isArray: true })
  getAllByCourse(
    @Param('courseId') courseId: number,
  ): Promise<CourseSectionListPublicDto[]> {
    return this.service.getAllByCourse(courseId);
  }
}
