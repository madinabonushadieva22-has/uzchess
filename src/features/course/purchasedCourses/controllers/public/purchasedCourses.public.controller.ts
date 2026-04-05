import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { PurchasedCoursesPublicService } from '../../services/public/purchasedCourses.public.service';
import { PurchasedCourseListPublicDto } from '../../dtos/public/purchasedCourses.list.public.dto';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { PurchasedCourseCreatePublicDto } from '../../dtos/public/purchasedCourses.create.public.dto';


@ApiTags('Public / Purchased Courses')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/purchased-courses')
export class PurchasedCoursesPublicController {
  constructor(private readonly service: PurchasedCoursesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => PurchasedCourseListPublicDto, isArray: true })
  getMyCourses(
    @CurrentUser() user: UserEntity,
  ): Promise<PurchasedCourseListPublicDto[]> {
    return this.service.getMyCourses(user.id);
  }

  @Post()
  @ApiOkResponse({ type: () => PurchasedCourseListPublicDto })
  purchase(
    @CurrentUser() user: UserEntity,
    @Body() payload: PurchasedCourseCreatePublicDto,
  ): Promise<PurchasedCourseListPublicDto> {
    return this.service.purchase(user.id, payload);
  }
}
