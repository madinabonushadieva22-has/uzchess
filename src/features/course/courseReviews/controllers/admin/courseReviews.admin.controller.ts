import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from 'src/core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { CourseReviewListAdminDto } from '../../dtos/admin/courseReview.list.admin.dto';
import { CourseReviewsAdminService } from '../../services/admin/courseReviews.admin.service';


@ApiTags('Admin / Course Reviews')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-reviews')
export class CourseReviewsAdminController {
  constructor(private readonly service: CourseReviewsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseReviewListAdminDto, isArray: true })
  getAll(): Promise<CourseReviewListAdminDto[]> {
    return this.service.getAll();
  }

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseReviewListAdminDto, isArray: true })
  getByCourse(
    @Param('courseId') courseId: number,
  ): Promise<CourseReviewListAdminDto[]> {
    return this.service.getByCourse(courseId);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
