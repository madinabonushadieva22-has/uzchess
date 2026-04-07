import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CourseReviewListPublicDto } from '../../dtos/public/courseReview.list.public.dto';
import { CourseReviewsPublicService } from '../../services/public/courseReviews.public.service';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserEntity } from 'src/features/common/users/entities/user.entity';
import { CourseReviewCreatePublicDto } from '../../dtos/public/courseReview.create.public.dto';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';

@ApiTags('Public / Course Reviews')
@Controller('public/course-reviews')
export class CourseReviewsPublicController {
  constructor(private readonly service: CourseReviewsPublicService) {}

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseReviewListPublicDto, isArray: true })
  getByCourse(
    @Param('courseId') courseId: number,
  ): Promise<CourseReviewListPublicDto[]> {
    return this.service.getByCourse(courseId);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  @ApiOkResponse({ type: () => CourseReviewListPublicDto })
  create(
    @CurrentUser() user: UserEntity,
    @Body() payload: CourseReviewCreatePublicDto,
  ): Promise<CourseReviewListPublicDto> {
    return this.service.create(user.id, payload);
  }
}
