import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CoursesPublicService } from '../../services/public/courses.public.service';
import { CourseListPublicDto } from '../../dtos/public/course.list.public.dto';
import { CourseDetailPublicDto } from '../../dtos/public/course.detail.public.dto';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';


@ApiTags('Public / Courses')
@Controller('public/courses')
export class CoursesPublicController {
  constructor(private readonly service: CoursesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseListPublicDto, isArray: true })
  getAll(): Promise<CourseListPublicDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  @ApiOkResponse({ type: () => CourseDetailPublicDto })
  getOne(@Param('id') id: number): Promise<CourseDetailPublicDto> {
    return this.service.getOne(id);
  }
}
