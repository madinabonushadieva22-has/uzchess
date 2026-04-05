import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserLessonsPublicService } from '../../services/public/userLessons.public.service';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { UserLessonListPublicDto } from '../../dtos/public/userLesson.list.public.dto';
import { UserLessonCreatePublicDto } from '../../dtos/public/userLesson.create.public.dto';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';

@ApiTags('Public / User Lessons')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/user-lessons')
export class UserLessonsPublicController {
  constructor(private readonly service: UserLessonsPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => UserLessonListPublicDto, isArray: true })
  getMyLessons(
    @CurrentUser() user: UserEntity,
  ): Promise<UserLessonListPublicDto[]> {
    return this.service.getMyLessons(user.id);
  }

  @Post()
  @ApiOkResponse({ type: () => UserLessonListPublicDto })
  save(
    @CurrentUser() user: UserEntity,
    @Body() payload: UserLessonCreatePublicDto,
  ): Promise<UserLessonListPublicDto> {
    return this.service.save(user.id, payload);
  }
}
